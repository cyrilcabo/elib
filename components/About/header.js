//Material Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

//UTILS
import Router from 'next/router';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	header: {
		height: 350,
		backgroundColor: 'black',
		marginBottom: 20,
	},
	innerHeader: {
		height: '70%',
		width: '70%',
		border: '5px solid white',
		color: 'white',
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			width: '90%',
			height: '90%',
		}
	},
	headerText: {
		fontSize: '2em',
	},
	btnLearnMore: {
		width: '50%',
		marginTop: 10,
	}
}));

const AboutHeader = (props) => {
	const classes = useStyle();
	return (	
		<Grid item xs={12} container justify="center" alignItems="center" className={classes.header}>
			<Grid item container justify="center" alignItems="center" direction="column" className={classes.innerHeader}>
				<Typography className={classes.headerText}> ABOUT ELIB </Typography>
				<div style={{width: '80%', opacity: '0.7'}}>
					<Typography> 
						ELib is a web application aimed to provide students of Eastern Visayas State University easy access
						over millions of resources with just a few clicks. <Hidden xsDown>It serves as an online library, closing the gaps
						between students and information. </Hidden>
					</Typography>
				</div>				
				{props.index
					?<Grid item className={classes.btnLearnMore}>
						<Button 
							fullWidth 
							variant="outlined" 
							color="secondary"
							onClick={() => Router.push('/about')}
						> Learn More </Button>
					</Grid>
					:""
				}
			</Grid>
		</Grid>
	);
}

export default AboutHeader;