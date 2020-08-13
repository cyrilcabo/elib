//Icons
import WebIcon from '@material-ui/icons/Web';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import MenuBookIcon from '@material-ui/icons/MenuBook';

//Components
import Layout from '../components/layout';
import Search from '../components/Search/search';

//Material Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

//UTILS
import Router from 'next/router';
import {connect} from 'react-redux';

//Images
import BannerLogo from '../public/logo/banner.png';

//Redux actions
import {submitSearch} from '../redux/actions/actions';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	topBanner: {
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		},
		marginBottom: 50,
	},
	bannerText: {
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
		"& > div": {
			width: '100%',
			marginBottom: 15,
			[theme.breakpoints.down('sm')]: {
				marginBottom: 20,
				display: 'flex',
				justifyContent: 'center',
				maxWidth: '80%',
			},
			[theme.breakpoints.down('xs')]: {
				maxWidth: '95%',
			}
		}
	},
	bannerImage: {
		width: '90%',
		[theme.breakpoints.down('md')]: {
			width: '100%',
		},
		[theme.breakpoints.down('sm')]: {
			width: 280,
		},
		[theme.breakpoints.down('xs')]: {
			width: 200,
		}
	},
	bannerButton: {
		fontSize: '1.1rem',
		padding: '5px 50px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		},
		[theme.breakpoints.down('xs')]: {
			padding: '5px 40px',
		}
	},
	searchPanel: {
		minHeight: 300,
		textAlign: 'center',
		backgroundColor: '#6d2020',
		paddingBottom: 70,
		borderBottom: '10px solid #b99712',
		color: '#f1f1f1',
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
		width: 80,
		height: '100%',
		fill: '#f0e9e9',
		[theme.breakpoints.up('md')]: {
			"&:hover": {
				animation: `$wiggle 1s linear`,
				animationDirection: 'forwards',
			},
		},
		[theme.breakpoints.down('md')]: {
			width: 70,
		},
		[theme.breakpoints.down('sm')]: {
			width: 60,
		},
		[theme.breakpoints.down('xs')]: {
			width: 50,
		}
	},
	iconText: {
		fontSize: '1.5rem',
		fontWeight: 550,
		[theme.breakpoints.down('md')]: {
			fontSize: '1.3rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		},
	},
	rootTitle: {
		fontSize: '4rem', 
		margin: 0,
		[theme.breakpoints.down('md')]: {
			fontSize: '3rem',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
		},
	},
	headerDescription: {
		fontSize: '1.2rem',
		letterSpacing: '1px',
		lineHeight: '30px', 
		margin: 0, 
		textAlign: 'justify',
		[theme.breakpoints.down('md')]: {
			fontSize: '1.05rem',
			lineHeight: '28px'
		},
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
			fontSize: '1.1rem',
			lineHeight: '30px',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1rem',
		},
	},
	divider: {
		width: '100%', 
		height: 10, 
		backgroundColor: '#e5ce73',
		[theme.breakpoints.down('md')]: {
			height: 5,
		},
		[theme.breakpoints.down('sm')]: {
			width: '70%',
		},
		[theme.breakpoints.down('xs')]: {
			width: '90%',
		}
	},
	perks: {
		'& p': {
			margin: '10px 0px 30px 0px',
			fontSize: '0.95rem',
			[theme.breakpoints.down('md')]: {
				marginTop: 5,
				foontSize: '0.9rem',
			},
		},
		[theme.breakpoints.down('xs')]: {
			maxWidth: '60%',
		}
	},
	slogan: {
		marginTop: 20,
		'& p': {
			fontSize: '1rem',
			margin: '5px 0px',
			[theme.breakpoints.down('sm')]: {
				fontSize: '0.95rem',
			}
		}
	}
}));

const Index = (props) => {
	const classes = useStyle();
	
	const submitSearch = (query, filter, provider) => {
		props.submitSearch(query, filter, provider);
		Router.push('/library');
	}
	
	return (
		<Layout noPadding>
			<Grid item xs={12} container justify="center" style={{marginTop: 50}}>
				<Grid item xs={12} md={10} container justify="center" spacing={5} className={classes.topBanner}>
					<Grid item xs={12} md={5} className={'image-container'}>
						<img src={BannerLogo} className={classes.bannerImage}/>
					</Grid>
					<Grid item xs={12} md={7} container className={classes.bannerText}>
						<Grid item>
							<p className={classes.rootTitle}> Welcome to <span style={{color: '#b99820'}}>E-Lib</span> </p>
						</Grid>
						<Grid item>
							<Divider className={classes.divider} />
						</Grid>
						<Grid item>
							<p className={classes.headerDescription}>
								E-Lib is an online platform designed to provide easy access to information for students. Due to the pandemic,
								it was realized that better systems are to be created, in order to cater the needs of the students. Therefore,
								it was imperative to utilize technologies available, so that the students are not left behind.
							</p>
						</Grid>
						<Grid item>
							<Grid item xs={12} container justify="center">
								<Button 
									color="secondary" 
									variant="outlined" 
									className={classes.bannerButton}
									onClick={() => Router.push('/about')}
								> Learn More </Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<svg 
					 	xmlns="http://www.w3.org/2000/svg"
					 	viewBox="0 0 1300 150"
					 	style={{
					 		marginBottom: -20,
					 	}}
				 	>
						<path 
							fillRule="evenodd"  
							fill="rgb(109, 32, 32)"
						 	d="M0.000,45.524 C229.130,14.977 457.909,0.483 686.398,0.716 C700.679,0.713 714.959,0.763 729.238,0.869 C743.518,0.974 757.796,1.133 772.073,1.347 C800.628,1.776 829.178,2.424 857.724,3.301 C914.816,5.055 971.890,7.726 1028.942,11.412 C1143.050,18.710 1257.054,30.423 1371.000,45.524 C1371.000,78.349 1371.000,111.175 1371.000,144.000 C914.000,144.000 457.000,144.000 0.000,144.000 C0.000,111.175 0.000,78.349 0.000,45.524 L0.000,45.524 Z"/>
					</svg>
				</Grid>
				<Grid xs={12} container item justify="center" className={classes.searchPanel}>
					<Grid item xs={12} md={10} justify="space-around" container className={classes.perks}>
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
						<div className={classes.slogan}>
							<p> Search for journal articles, books, magazines, news, and many more from millions of resources.</p>
							<p> Take advantage of this free vantage! </p>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
}

const mapDispatchToProps = {
	submitSearch,
}

export default connect(state => ({}), mapDispatchToProps)(Index);
