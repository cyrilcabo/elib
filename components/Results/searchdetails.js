//Material components 
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 200,
		[theme.breakpoints.down('sm')]: {
			minHeight: 150,
		},
		height: '100%',
		padding: 10,
	},
	rFrom: {
		backgroundColor: 'black',
		color: 'white',
		padding: 2,
	},
	rFor: {
		backgroundColor: 'black',
		color: '#ef6969',
		padding: 2,
	}
}));

const SearchDetails = (props) => {
	const classes = useStyle();
	
	const rFrom = props.resultsFrom.map(item => <Grid item><span className={classes.rFrom}> {item} </span></Grid>);
	const rFor = props.resultsFor.map(item => <Grid item><span className={classes.rFor}> {item} </span></Grid>);
	
	return (
		<Grid item xs={12} container className={classes.root}>
			<Grid item xs={12} container justify="space-between">
				<Grid item>
					<Typography> Showing results from: </Typography>
				</Grid>
				<Grid item container justify="center" alignItems="center" spacing={1}>
					{props.resultsFrom
						?rFrom
						:""
					}
				</Grid>
			</Grid>
			<Divider style={{width: '100%'}} />
			<Grid item xs={12} container justify="space-between">
				<Grid item>
					<Typography> Showing results for: </Typography>
				</Grid>
				<Grid item container justify="center" alignItems="center" spacing={1}>
					{props.resultsFor
						?rFor
						:""
					}
				</Grid>
			</Grid>
			<Divider style={{width: '100%'}} />
			<Grid item xs={12} style={{textAlign: 'center'}}>
				<Typography variant="subtitle2">
					<b> Note: </b> For faster searching, limit your search sources to one (e.g. Gale).
				</Typography>
			</Grid>
		</Grid>
	);
}

export default SearchDetails;