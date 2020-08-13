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
		boxShadow: '0px 0px 3px gray',
	},
	container: {
		[theme.breakpoints.down('xs')]: {
			'& > div.MuiGrid-item': {
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}
		}
	},
	docType: {
		backgroundColor: 'black',
		padding: 2,
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
		}
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
	title: {
		fontSize: '1.3em', 
		textAlign: 'justify',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.1rem',
			textAlign: 'center'
		}
	},
	author: {
		fontSize: '0.95rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.85rem',
		}
	},
	publication: {
		fontSize: '1rem',
		color: '#b99712',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.95rem',
		}
	},
	words: {
		fontSize: '0.9rem',
		color: '#631d1d'
	},
	vol: {
		fontSize: '1rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.95rem',
		}
	},
	pubDate: {
		fontSize: '0.95rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
		}

	},
	snippet: {
		textAlign: 'justify',
		fontSize: '0.95rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
		},
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center',
		}
	},
	btn: {
		margin: '10px 0 5px 0',
		backgroundColor: '#320505'
	}
}));

const Catalogue = (props) => {
	const classes = useStyle();
	const {title, authors, docType, wordCount, snippet, volNumber, pubDate, publication, src} = props;
	return (
		<Card className={classes.root}>
			<Grid item xs={12} container justify="center" className={classes.container} >
				<Grid item xs={12}>
					<Typography variant="h4" className={classes.title}> <b> {title} </b> </Typography>
				</Grid>
				<Grid item container xs={12} sm={6} direction="column" alignItems="flex-start" justify="flex-start">
					<Typography className={classes.author}> <i> {authors} </i> </Typography>
					<Typography className={classes.publication}> {publication} </Typography>
					<Typography className={classes.words}> Words: {wordCount} </Typography>
				</Grid>
				<Grid item container xs={12} sm={6} direction="column" justify="center" className={classes.pubInfo}>
					<Typography className={classes.vol}> <b>{volNumber}</b> </Typography>
					<Typography className={classes.pubDate}> {pubDate} </Typography>
					{docType ?<Typography> <span className={classes.docType}> {docType} </span> </Typography> :""}
					{src ?<Typography> <span className={classes.src}> {src} </span> </Typography> :""}
				</Grid>
				<Divider style={{width: '100%', margin: '5px 0px 5px 0px'}} />
				<Grid item xs={12}>
					<Typography  variant="subtitle1" className={classes.snippet} > {snippet} </Typography>
				</Grid>
				<Grid item xs={10} sm={8} md={6} lg={4}>
					<Button 
						className={classes.btn}
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