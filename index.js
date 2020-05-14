const express = require('express');
const fetch = require('isomorphic-unfetch');
const cheerio = require('cheerio');
const FormData = require('form-data');

const app = express();

app.set('port', process.env.PORT || 3000);

const formdata = new FormData()

//GALE AUTH DETAILS
formdata.append('userGroupName', 'phevsu');
formdata.append('password', 'wonderful');
formdata.append('prodId', 'EAIM');

//CONNECT TO GALE DATABASE
const connect = async () => {
	return await fetch('https://galeapps.gale.com/apps/auth', {method: 'POST', body: formdata}).then((data) => {
		return data.headers.get('set-cookie');
	});
}

//COOKIES TO BE USED FOR GALE DATABASE
let galeCookies;

//AUTHENTICATE GALE DATABASE FOR SEARCHING
const auth = async () => {
	if (!galeCookies) galeCookies = await connect();
	return galeCookies;
}
//USE GALE AUTHENTICATION AS APPLICATION MIDDLEWARE
app.use(async(req, res, next) => {
	galeCookies = await auth();
	return next();
});

//SEARCH GALE DATABASE
const sampleSearch = async (search, filter) => {
	console.log('searching...');
	return await fetch(`https://go.gale.com/ps/searchWithin.do?limiterFieldValues%5BDA%5D=&limiterTypes%5BTY%5D=OR&limiterTypes%5BPU%5D=OR&quickSearchTerm=${search}&searchEndCount=665&limiterFieldValues%5BAC%5D=y&_limiterFieldValues%5BAC%5D=on&standAloneLimiters=LI&_limiterFieldValues%5BLI%5D=on&actionCmd=&stw.option=withinResults&prodId=EAIM&userGroupName=phevsu&searchType=AdvancedSearchForm&searchId=&tabID=${filter || "T002"}&topicId=&inPS=true&sort=&searchResultsType=SingleTab&currentPosition=&valueExpressionSize=2&nwf=y&qt=OQE%7E${search}%7E%7ERB%7E366+5&lm=`, {	
		credentials: 'same-origin',
		headers: {
			cookie: galeCookies,
		}
	}).then(async (data) => {
		const dataRes = await data.text().then(res => res);
		const $ = cheerio.load(dataRes);
		const cheerioResult = $('li.citation-view');
		let res = [];
		for (let i = 0; i < cheerioResult.length; i++) {
			const root = cheerioResult[i], context = 'div.article-information';
			res.push({
				id: $(root).data('id').slice(5),
				title: $('div.titleWrapper>h3.title>a', context, root).text(),
				authors: $('span.author>span.definition', context, root).text(),
				publication: $('span.publication_citation>span.citation-details>span.citation-publication', context, root).text(),
				volNumber: $('span.publication_citation>span.citation-details>span.citation-volNumber', context, root).text(),
				pubDate: $('div.snippetWrapper>span.citation-pubDate', context, root).text(),
				wordCount: $('div.snippetWrapper>span.citation-wordcount', context, root).text(),
				docType: $('div.snippetWrapper>span.citation-docInfoType', context, root).text().trim(),
				snippet: $('div.snippetWrapper>span.citation-snippet', context, root).text(),
			});
		}
		return res;
	});
}


//VIEW GALE ARTICLE
const viewArticle = async(id) => {
	console.log('fetching document...');
	return await fetch(`https://go.gale.com/ps/retrieve.do?tabID=&resultListType=RESULT_LIST&searchResultsType=SingleTab&searchType=BasicSearchForm&currentPosition=&docId=GALE%7C${id}&docType=Article&sort=Relevance&contentSegment=ZEAI-MOD1&prodId=EAIM&contentSet=GALE%7C${id}&searchId=R1&userGroupName=phevsu&inPS=true&ps=1&cp=`, {
		credentials: 'same-origin',
		headers: {
			cookie: galeCookies,
		}
	}).then(async(data) => {
		const dataRes = await data.text().then(res => res);
		const $ = cheerio.load(dataRes);
		const infoRoot = $('section#documentDisplay'), infoContext = 'section#docSummary'; 
		return {
			title: $('div.doc-title>h1.definition', infoContext, infoRoot).text(),
			authors: $('div.author-information>div.media-object_content>div.doc-authors>span.definition', infoContext, infoRoot).text().trim(),
			pubDate: $('div.author-information>div.media-object_content>div.doc-pub-date>span.definition', infoContext, infoRoot).text().trim(),
			publication: $('div.media-object_content>div.publication>span.definition', $('div.media-object', infoContext, infoRoot).eq(1)).text(),
			publisher: $('div.media-object_content>div.publisher>span.definition', $('div.media-object', infoContext, infoRoot).eq(1)).text(),
			content: $('div.article-content>div.document-body-text>div.document-text').html(),
			copyright: $('div.copyright>span.definition').text(),
		}
	})
}


app.get('/search', async (req, res) => {
	const {search, filter} = req.query;
	const result = await sampleSearch(search, filter);
	let results = "";
	if (result) console.log('search finished! length: ', result.length);
	/*for (let i = 0; i < result.length; i++) {
		const {id, title, authors, publication, volNumber, pubDate, wordCount, docType, snippet} = result[i];
		results += `<div> 
			<div><span><span><h4>Title: </h4></span><span> ${title} </span></span></div>
			<div><span><h4>Authors: </h4> ${authors}</span></div>
			<div><span><h4>Publication: </h4> ${publication}</span></div>
			<div><span><h4>Volume no.: </h4> ${volNumber}</span></div>
			<div><span><h4>Publication date: </h4> ${pubDate}</span></div>
			<div><span><h4>Word count: </h4> ${wordCount}</span></div>
			<div><span><h4>Snippet: </h4> ${snippet}</span></div>
			<a href="/view/gale/${id}"> VIEW DOCUMENT </a>
		</div><hr />`;
	}
	res.send("<h1> Results: </h1>"+results);*/
	res.json(result);
});

app.get('/view/gale/:id', async (req, res) => {
	const {id} = req.params;
	const article = await viewArticle(id);
	console.log("Document fetched!");
	//const {title, authors, pubDate, publication, publisher, content, copyright} = article;
	/*res.send(`<div>
		<h1> Article </h1>
		<div><h3> Title: </h3> ${title} </div>
		<div><h3> Authors: </h3> ${authors} </div>
		<div><h3> Publication Date: </h3> ${pubDate} </div>
		<div><h3> Publication: </h3> ${publication} </div>
		<div><h3> Publisher: </h3> ${publisher} </div>
		<div><h3> Content: </h3> ${content} </div>
		<div><h3> Copyright: </h3> ${copyright} </div>
	</div>`);*/
	res.json({...article, content: ""});
});


app.listen(app.get('port'), () => console.log('running on port'+app.get('port')));