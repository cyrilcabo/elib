//Material Components
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

//Custom components
import Layout from '../components/layout';

import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	header: {
		minHeight: 423,
		backgroundColor: '#000000',
		textAlign: 'center',
	},
	MVcontainer: {
		minHeight: 403,
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			padding: '50px 0px 0px 0px',
		}
	},
	MVinnerContainer: {
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		}
	},
	WHOcontainer: {
		minHeight: 641,
		backgroundColor: '#f3f3f3',
		textAlign: 'center',
		marginBottom: 50,
		[theme.breakpoints.down('sm')]: {
			padding: '50px 0px 50px 0px'
		}
	},
	headerTitle: {
		fontSize: '4.5rem',
		color: '#ffee00',
		margin: '0px 0px 30px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '3rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
		}
	},
	headerSubTitle: {
		fontSize: '1.2rem',
		color: 'white',
		margin: '0px 0px 0px 0px',
		lineHeight: '30px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		}
	},
	MVtitle: {
		color: '#320505',
		fontSize: '1.8rem',
		margin: '0px 0px 25px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem',
			marginBottom: 10,
		}
	},
	MVcontent: {
		color: 'black',
		fontSize: '1rem',
		lineHeight: '30px',
		margin: 0,
		[theme.breakpoints.down('sm')]: {
			marginBottom: 30,
		}
	},
	WHOtitle: {
		fontSize: '3.2rem',
		color: '#320505',
		margin: '0px 0px 70px 0px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.2rem',
			marginBottom: 60,
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2rem',
		}
	},
	memberContainer: {
		'& > div.MuiGrid-item': {
			marginBottom: 15,
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 50,
		}
	},
	memberIDcontainer: {
		'& > div.MuiGrid-item': {
			marginBottom: 2,
		}
	},
	memberImg: {
		[theme.breakpoints.down('sm')]: {
			height: 120,
		},
		[theme.breakpoints.down('xs')]: {
			height: 100,
		}
	},
	memberDivider: {
		height: 2,
		width: '70%',
		backgroundColor: '#b99820',
		[theme.breakpoints.down('sm')]: {
			width: '40%',
		},
		[theme.breakpoints.down('xs')]: {
			width: '70%',
		}
	},
	memberTitle: {
		fontSize: '1.2rem',
		margin: 0,
	},
	memberPos: {
		fontSize: '1rem',
		margin: 0,
	},
	memberDetails: {
		fontSize: '1rem',
		margin: 0,
		lineHeight: '25px',
	},
}));

const About = () => {
	const classes = useStyle();
	const team = [
		{
			img: "officelady.png",
			name: "Yolanda C. Cabo",
			pos: "Campus Librarian",
			details: "Oversees the whole library operation and management of EVSU-TC library.",
		},
		{
			img: "officeman1.png",
			name: "Cyril Cabo",
			pos: "Web Developer",
			details: "Develops and manages the production and operation of the E-Lib website.",
		},
		{
			img: "officeman2.png",
			name: "Some Guy",
			pos: "Placeholder",
			details: "This random guy is needed to balance the layout. Two is just not good enough."
		}
	];
	const members = team.map((item, index) => {
		return <Grid item key={index} xs={12} md={3} container direction="column" alignItems="center" className={classes.memberContainer}>
			<Grid item>
				<img src={`/Team/${item.img}`} className={classes.memberImg} />
			</Grid>
			<Grid item container direction="column" alignItems="center" className={classes.memberIDcontainer}>
				<Grid item>
					<h3 className={classes.memberTitle}> {item.name} </h3>
				</Grid>
				<Grid item container justify="center">
					<Divider className={classes.memberDivider} />
				</Grid>
				<Grid item>
					<p className={classes.memberPos}> {item.pos} </p>
				</Grid>
			</Grid>
			<Grid item>
				<p className={classes.memberDetails}> {item.details} </p>
			</Grid>
		</Grid>
	});
	return (
		<React.Fragment>
			<Layout style={{padding: 0}}>
				<Grid item xs={12} container alignItems="center" justify="center" className={classes.header}>
					<Grid item xs={11} md={8} container direction="column" justify="center" alignItems="center">
						<Grid item>
							<h1 className={classes.headerTitle}> E-LIBRARY </h1>
						</Grid>
						<Grid item>
							<p className={classes.headerSubTitle}> 
								ELib is a web application aimed to provide students of Eastern Visayas State University easy access
								over millions of resources with just a few clicks. It serves as an online library, closing the gaps
								between students and information.
							</p>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} container alignItems="center" justify="center" className={classes.MVcontainer}>
					<Grid item xs={11} md={8} container className={classes.MVinnerContainer} alignItems="center">
						<Grid item xs={12} md={5} container direction="column" alignItems="center">
							<Grid item>
								<h3 className={classes.MVtitle}> MISSION </h3>
							</Grid>
							<Grid item>
								<p className={classes.MVcontent}> 
									ELib will utilize modern technologies to overcome traditional systems have faced. ELib will work hard to supply high modern demands of knowledge and information.
								</p>
							</Grid>
						</Grid>
						<Grid item xs={12} md={5} container direction="column" alignItems="center">
							<Grid item>
								<h3 className={classes.MVtitle}> VISION </h3>
							</Grid>
							<Grid item>
								<p className={classes.MVcontent}> 
									ELib aims to close the gap between students and valuable information; ELib will serve what was inaccesible knowledge to any student who may need them.
								</p>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} container alignItems="center" justify="center" className={classes.WHOcontainer}>
					<Grid item container xs={11} md={10} direction="column" justify="center" alignItems="center">
						<Grid item>
							<h2 className={classes.WHOtitle}> WHO WE ARE </h2>
						</Grid>
						<Grid item container container justify="space-around">
							{members}
						</Grid>
					</Grid>
				</Grid>
			</Layout>
			<style jsx global>{`
				body {
					background-color: white;
				}
			`}</style>
		</React.Fragment>
	);
}

export default About;