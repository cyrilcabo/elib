//Material Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

//Custom components
import Layout from '../components/layout';
import Search from '../components/Search/search';
import Catalogue from '../components/Catalogue/catalogue';
import Results from '../components/Results/results';
import SearchDetails from '../components/Results/searchdetails';

import Carousel from 'react-material-ui-carousel';

//UTILS
import React from 'react';
import Router from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {connect} from 'react-redux';

//Redux actions
import {submitSearch} from '../redux/actions/actions';

const useStyle = makeStyles({
	root: {
		
	},
	header: {
		height: 300,
		backgroundColor: 'black',
	},
	carouselRoot: {
		height: '100%',
		width: '100%',
		'&>div.CarouselItem': {
			width: '100%',
			height: '90%',
			'&>div': {
				height: '100%',
				width: '100%',
			}
		}
	},
	innerHeader: {
		width: '60%',
		height: '60%',
		color: 'white',
		fontSize: '2em',
		border: '5px solid white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		opacity: '0.6',
	}
});

const Library = (props) => {
	const classes = useStyle();
	
	const {search} = props;
	
	//SEARCH STATES FOR UI
	const articles = search.results;
	const searched = search.searched;
	const searching = search.searching;
	const resultsFor = search.filter;
	const resultsFrom = search.provider;
	
	const results = articles.map(item => {
		return <Catalogue
					title={item.title}
					authors={item.authors}
					wordCount={item.wordCount}
					publication={item.publication}
					volNumber={item.volNumber}
					pubDate={item.pubDate}
					src={item.src}
					snippet={item.snippet}
					docType={item.docType}
					viewDocument={() => Router.push(`/viewdocument?id=${item.provider+item.id}`)}
				/>
	});
	
	const carousel = ["Search", "Learn", "More"].map((item, index) => {
		return (
			<Grid key={index} item xs={12} style={{height: '100%'}} container justify="center" alignItems="center">
				<div className={classes.innerHeader}>
					<h3> {item} </h3>
				</div>
			</Grid>
		);
	});
	
	return (
		<Layout noPadding>
			<Grid item xs={12} className={classes.header} container alignItems="center" justify="center">
				<Carousel className={classes.carouselRoot} timeout={1500}>
					{carousel}
				</Carousel>
			</Grid>
			<Grid item container style={{paddingTop: 20}} xs={12} md={10} id="results" justify="center">
				<Search submitSearch={props.submitSearch} query={props.search.query} />
				<Grid item xs={12} container justify="space-around" direction="row-reverse" spacing={1} style={{marginTop: 10}}>
					<Grid item xs={12} md={4}>
						<Paper>
							<SearchDetails resultsFrom={resultsFrom ?[resultsFrom] :[]} resultsFor={resultsFor ?[resultsFor] :[]} />
						</Paper>
					</Grid>
					<Grid item xs={12} md={8}>
						{searching
							?<LinearProgress />
							:""
						}
						<Results results={results} searched={searched} searching={searching} />
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
}

const mapDispatchToProps = {
	submitSearch,
}

export default connect(state => ({search: state.search}), mapDispatchToProps)(Library);