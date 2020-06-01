//SCRAPING UTILS
const fetch = require('isomorphic-unfetch');
const cheerio = require('cheerio');
const FormData = require('form-data');

//CORE UTILS
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({dev: dev});
const handler = nextApp.getRequestHandler();

const app = express();

app.set('port', process.env.PORT || 3000);

//CONNECT TO GALE DATABASE
const connect = async () => {
	const formdata = new FormData()

	//GALE AUTH DETAILS
	formdata.append('userGroupName', 'phevsu');
	formdata.append('password', 'wonderful');
	formdata.append('prodId', 'EAIM');
	
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
const galeSearch = async (search, rawFilter) => {
	console.log('searching...');
	
	const setFilter = (param) => {
		switch (param) {
			case "Books":
				return "T001";
			case "Journals":
				return "T002";
			case "Magazines":
				return "T003";
			case "News":
				return "T004";
			default: return "T002";
		}
	}
	
	const filter = setFilter(rawFilter);
	
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
			//USE CHEERIO TO SCRAPE SEARCH RESULTS FROM WEBSITE
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
				provider: "GA",
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
		
		//USE CHEERIO TO SCRAPE DOCUMENT/ARTICLE INFO
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

nextApp.prepare().then(() => {
	
	app.get('/api/search', async (req, res) => {
		const {query, filter, provider} = req.query;
		const results = await galeSearch(query, filter);
		if (results) console.log('search finished! length: ', results.length);
		
		res.json({
			query,
			filter: filter==="undefined" ?"Journals" :filter,
			results,
			provider: provider==="undefined" ?"Gale" :provider,
		});
	});

	app.get('/api/view/:id', async (req, res) => {
		const {id} = req.params;
		console.log("Provider used: ", id.slice(0, 2));
		const article = await viewArticle(id.slice(2));
		console.log("Document fetched!");
		res.json(article);
	});
	
	app.get('*', (req, res) => {
		return handler(req, res);
	});
	
	app.listen(app.get('port'), () => console.log('ELib is running on PORT:'+app.get('port')));
});

