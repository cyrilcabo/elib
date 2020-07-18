//Material Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

//Custom components
import Layout from '../components/layout';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 500,
	},
	banner: {
		minHeight: 500,
		[theme.breakpoints.down('xs')]: {
			marginBottom: 100,
		}
	},
	bannerText: {
		marginTop: 50,
		textAlign: 'justify',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		}
	},
	bannerTitleInfo: {
		margin: 0,
		fontSize: '1.5rem',
		[theme.breakpoints.down('sm')]: {
			marginTop: 50,
			fontSize: '1.1rem',
		}
	},
	bigCircle: {
		borderRadius: '100%', 
		top: "10%",
		height: "90%",
		width: 350, 
		position: 'absolute',
		zIndex: -2,
		[theme.breakpoints.down('xs')]: {
			height: '60%',
			width: 250
		}
	},
	smallCircle: {
		borderRadius: '100%', 
		height: "55%",
		width: 200, 
		position: 'absolute',
		top: '50%',
		zIndex: -1,
		[theme.breakpoints.down('xs')]: {
			height: '35%',
			width: 150
		}
	},
	bannerTitleBigCircle: {
		backgroundColor: '#edc2c2',
		right: '10%',
		[theme.breakpoints.down('sm')]: {
			top: '1%',
			right: '1%'
		}
	},
	bannerTitleSmallCircle: {
		right: "20%",
		backgroundColor: '#f8eab3',
		[theme.breakpoints.down('sm')]: {
			top: '100%',
			left: '2%'
		}
	},
	teamBigCircle: {
		backgroundColor: '#f8eab3',
		left: '10%',
		top: '30%',
		[theme.breakpoints.down('sm')]: {
			top: '1%',
			left: '1%'
		}
	},
	teamSmallCircle: {
		left: "20%",
		top: '70%',
		backgroundColor: '#edc2c2',
		[theme.breakpoints.down('sm')]: {
			left: '80%',
			top: '85%',
		}
	},
	MandVcontainer: {
		padding: 0,
		minHeight: 450,
		backgroundColor: 'black',
		[theme.breakpoints.down('sm')]: {
			paddingBottom: 50,
		}
	},
	MandVtitle: {
		fontSize: '2.5rem', 
		color: '#ecd67f', 
		margin: 0,
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
		}
	},
	MandVinfo: {
		fontSize: '1.5rem', 
		color: '#f0e9e9', 
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		}
	},
	teamContainer: {
		marginTop: 80,
		flexDirection: 'column',
	},
	endToCenter: {
		alignItems: 'flex-end',
		textAlign: 'right',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
			textAlign: 'center'
		}
	},
	memberContainer: {
		flexDirection: 'row-reverse',
		justifyContent: 'flex-start',
		margin: '10px 0px 10px 0px',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		}
	},
	rootTitle: {
		fontSize: '5rem', 
		margin: 0,
		marginBottom: 30,
		[theme.breakpoints.down('sm')]: {
			fontSize: '2rem',
		}
	},
	infoQuote: {
		margin: '100px 0px 0px 0px', 
		fontSize: '2.5rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem'
		}
	}	
}));

const About = () => {
	const classes = useStyle();
	
	return (
		<Layout noPadding>
			<Grid item xs={12} container justify="center" style={{overflowX: 'hidden'}}>
				<Grid item xs={12} container justify="center" className={classes.banner}>
					<Grid item xs={12} container justify="center" style={{height: '80%', position: 'relative'}}>
						<div className={[classes.bigCircle, classes.bannerTitleBigCircle].join(' ')} />
						<div className={[classes.smallCircle, classes.bannerTitleSmallCircle].join(' ')} />
						<Grid item xs={11} md={8} className={classes.bannerText}>
							<p className={classes.rootTitle}> What is Elib? </p>
							<p className={classes.bannerTitleInfo}>
								ELib is a web application aimed to provide students of Eastern Visayas State University easy access
								over millions of resources with just a few clicks. It serves as an online library, closing the gaps
								between students and information.
							</p>
						</Grid>
					</Grid> 
				</Grid>
				<Grid item xs={12} className={classes.MandVcontainer} container alignItems="center" direction="column">
					<Grid item container justify="center">
						<svg 
							 xmlns="http://www.w3.org/2000/svg"
							 width="52px" 
							 height="0.608in"
						 >
							<path 
								fillRule="evenodd"  
								fill="rgb(240, 233, 233)"
								d="M51.012,0.074 L0.002,0.012 L25.470,51.003 L51.012,0.074 Z"/>
						</svg>
					</Grid>
					<Grid item container justify="center">
						<Grid item xs={11} container justify="space-around" spacing={3}>
							<Grid item xs={12} md={5} container justify="center">
								<p className={classes.MandVtitle}> MISSION </p>
								<p className={classes.MandVinfo}>
									ELib will utilize modern technologies to overcome traditional systems have faced. ELib will work hard to supply high modern demands of knowledge and information.
								</p>
								<Divider style={{width: '80%', height: 12, backgroundColor: '#c88484', marginBottom: 10}} />
								<Divider style={{width: '40%', height: 12, backgroundColor: '#ecd67f'}} />
							</Grid>
							<Grid item xs={12} md={5} container justify="center">
								<p className={classes.MandVtitle}> VISION </p>
								<p className={classes.MandVinfo}>
									ELib aims to close the gap between students and valuable information; ELib will serve what was inaccesible knowledge to any student who may need them.
								</p>
								<Divider style={{width: '80%', height: 12, backgroundColor: '#c88484', marginBottom: 10}} />
								<Divider style={{width: '40%', height: 12, backgroundColor: '#ecd67f'}} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item xs={12} justify="center" style={{minHeight: 500, marginBottom: 80}}>
					<Grid item xs={12} container justify="center" style={{height: '80%', position: 'relative',}}>
						<div className={[classes.bigCircle, classes.teamBigCircle].join(' ')} />
						<div className={[classes.smallCircle, classes.teamSmallCircle].join(' ')} />
						<Grid item xs={11} md={10} container className={[classes.teamContainer, classes.endToCenter].join(' ')}>
							<Grid item>
								<p className={classes.rootTitle}> Who we are </p>
							</Grid>
							<Grid item container className={classes.memberContainer} alignItems="center" spacing={2}>
								<Grid item style={{height: 80, width: 80, borderRadius: '100%', backgroundColor: 'black'}} >
								</Grid>
								<Grid item>
									<Grid item>
										<p style={{margin: 0, fontSize: '1.5rem'}}> Yolanda C. Cabo </p>
									</Grid>
									<Grid item>
										<p style={{margin: 0, fontSize: '1.1rem'}}> Campus Librarian </p>
									</Grid>
									<Grid item>
										<Divider style={{height: 5, width: 250, backgroundColor: '#b99712'}} />
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<p style={{margin: 0, fontSize: '1.1rem'}}>
									Oversees the whole library operation and management of EVSU-TC library
								</p>
							</Grid>
							<Grid item >
								<p className={classes.infoQuote}>
									<i> "Service is our passion" </i>
								</p>
							</Grid>
						</Grid>
					</Grid> 
				</Grid>
			</Grid>
		</Layout>
	);
}

export default About;
