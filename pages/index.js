//Icons
import WebIcon from '@material-ui/icons/Web';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import MenuBookIcon from '@material-ui/icons/MenuBook';

//Components
import Layout from '../components/layout';
import Search from '../components/Search/search';
import AboutHeader from '../components/About/header';

//Material Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

//UTILS
import Router from 'next/router';
import {connect} from 'react-redux';

//Redux actions
import {submitSearch} from '../redux/actions/actions';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	header: {
		backgroundColor: '#f3f3f3',
		minHeight: 200,
		textAlign: 'center',
		marginBottom: 50,
	},
	"@keyframes wiggle": {
		"33%": {
			transform: "rotate(20deg)",
		},
		"66%": {
			transform: "rotate(-20deg)",
		},
		"100%": {
			transform: "rotate(0deg)",
		}
	},
	icons: {
		width: '50%',
		height: '100%',
		[theme.breakpoints.up('md')]: {
			"&:hover": {
				animation: `$wiggle 1s linear`,
				animationDirection: 'forwards',
			},
		},
		[theme.breakpoints.down('sm')]: {
			width: '20%',
		},
	},
	iconText: {
		fontSize: '1.5em',
		[theme.breakpoints.up('md')]: {
			fontSize: '2em',
		},
	},
}));

const Index = (props) => {
	const classes = useStyle();
	
	const submitSearch = (query, filter, provider) => {
		props.submitSearch(query, filter, provider);
		Router.push('/library');
	}
	
	return (
		<Layout noPadding>
			<Grid xs={12} container item justify="center" className={classes.header}>
				<h1> Welcome to E-Library </h1>
				<Grid item xs={12} md={10} justify="space-around" container className={classes.iconHolder}>
					<Grid item xs={12} sm={3} container justify="center" direction="column">
						<Grid item container justify="center">
							<WebIcon className={classes.icons} />
						</Grid>
						<Typography variant="h4" className={classes.iconText}> Online </Typography>
						<p> Now you can access millions of resources anytime and anywhere! </p>
					</Grid>
					<Grid item xs={12} sm={3} container justify="center" direction="column">
						<Grid item container justify="center">
							<MenuBookIcon className={classes.icons} />
						</Grid>
						<Typography variant="h4" className={classes.iconText}> Accessible </Typography>
						<p> With a web platform, you can read just from any device! </p>
					</Grid>
					<Grid item xs={12} sm={3} container justify="center" direction="column">
						<Grid item container justify="center">
							<MoneyOffIcon className={classes.icons} />
						</Grid>
						<Typography variant="h4" className={classes.iconText}> Free </Typography>
						<p> To top it all, you need not to spend any cents, as it's all for free! </p>
					</Grid>
				</Grid>
				<Grid item container xs={11} md={10} justify="center">
					<Search submitSearch={submitSearch} query={""} />
					<div>
						<p> Search for journal articles, books, magazines, news, and many more from millions of resources.</p>
						<p> Take advantage of this free vantage! </p>
					</div>
				</Grid>
			</Grid>
			<AboutHeader index/>
		</Layout>
	);
}

const mapDispatchToProps = {
	submitSearch,
}

export default connect(state => ({}), mapDispatchToProps)(Index);