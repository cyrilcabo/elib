//Material Components
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		height: '100%',
		width: '100%',
		minHeight: 300,
		backgroundColor: '#ded1d1',
	},
	item: {
		[theme.breakpoints.down('xs')]: {
			padding: '12px 5px'
		}
	}
}));

const Results = (props) => {
	const classes = useStyle();
	const results = props.results.map((item, key) => {
		return (
			<ListItem key={key} className={classes.item}>
				{item}
			</ListItem>
		);
	})
	return (
		<Paper className={classes.root} style={{backgroundColor: props.results.length ?"" :"black"}} square elevation={2}>
			{props.results.length
				?<List style={{height: '100%', width: '100'}}>
					{results}
				</List>
				:<Grid item xs={12} container justify="center" alignItems="center" style={{minHeight: 300}}>
					<Typography style={{color: props.searched ?"#f50057" :"white", textAlign: 'center'}} variant="h5"> 
						{props.searched
							?props.searchErr
								?"Something went wrong, please try again."
								:"Sorry, no items are available."
							:props.searching
								?<CircularProgress />
								:"Search now over millions of articles, books, etc.!"
						}
					</Typography>
				</Grid>
			}
		</Paper>
	);
}

export default Results;