import makeStyles from '@material-ui/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import FilterSettings from '../Filter/filtersettings';

const useStyle = makeStyles({
	search: {
		display: "flex",
		alignItems: "center",
		height: '100%',
	},
	divider: {
		height: 20,
	},
	input: {
		flex: 1,
		padding: 8,
	},
});


const SearchField = (props) => {
	const classes = useStyle();
	
	const submitSearch = (e) => {
		e.preventDefault();
		props.submitSearch();
	}
	
	return (
		<React.Fragment>
			<Paper  onSubmit={submitSearch} className={classes.search} id="container" component="form">
				<InputBase onChange={props.handleSearch} value={props.search} className={classes.input} placeholder="Search books, articles, etc." />
				{props.search 
					?<IconButton onClick={props.handleClear} color="secondary">
						<CloseIcon />
					</IconButton>
					: ""
				}
				<Divider className={classes.divider} orientation="vertical" />
				<FilterSettings filters={props.filters} setFilter={props.setFilter} unsetFilter={props.unsetFilter} filtered={props.filtered}/>
			</Paper>
		</React.Fragment>
	);
};

export default SearchField;