//Material Components
import Card from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		width: '100%',
		padding: 5,
	},
	docType: {
		backgroundColor: 'black',
		padding: 2,
		color: 'white',
	},
	pubInfo: {
		alignItems: 'flex-end',
		[theme.breakpoints.down('xs')]: {
			alignItems: 'flex-start',
		}
	},
	src: {
		backgroundColor: 'gray',
		padding: 2,
		color: 'black',
	},
}));

const Catalogue = (props) => {
	const classes = useStyle();
	const {title, authors, docType, wordCount, snippet, volNumber, pubDate, publication, src} = props;
	return (
		<Card className={classes.root}>
			<Grid item xs={12} container justify="center" >
				<Grid item xs={12}>
					<Typography variant="h4" style={{fontSize: '1.5em', textAlign: 'justify'}}> <b> {title} </b> </Typography>
				</Grid>
				<Grid item container xs={12} sm={6} direction="column" alignItems="flex-start" justify="flex-start">
					<Typography> <i> {authors} </i> </Typography>
					<Typography style={{color: '#b99712'}}> {publication} </Typography>
					<Typography style={{color: '#631d1d'}}> Words: {wordCount} </Typography>
				</Grid>
				<Grid item container xs={12} sm={6} direction="column" justify="center" className={classes.pubInfo}>
					<Typography> <b>{volNumber}</b> </Typography>
					<Typography> {pubDate} </Typography>
					{docType ?<Typography> <span className={classes.docType}> {docType} </span> </Typography> :""}
					{src ?<Typography> <span className={classes.src}> {src} </span> </Typography> :""}
				</Grid>
				<Divider style={{width: '100%', margin: '5px 0px 5px 0px'}} />
				<Grid item xs={12} style={{textAlign: 'justify'}}>
					<Typography variant="subtitle1"> {snippet} </Typography>
				</Grid>
				<Grid item xs={10} md={8}>
					<Button 
						style={{margin: '10px 0 5px 0'}}
						fullWidth 
						variant="contained" 
						color="secondary"
						onClick={props.viewDocument}
					> View Document </Button>
				</Grid>
			</Grid>
		</Card>
	);
}

export default Catalogue;