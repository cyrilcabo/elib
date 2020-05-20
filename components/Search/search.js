//Material components
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Custom components
import SearchField from './searchfield';

//UTILS
import React from 'react';

const Search = (props) => {
	//UI State for searching
	React.useEffect(() => setSearch(props.query), [props.query]);
	
	//Handle searching
	const [search, setSearch] = React.useState(props.query);
	const handleSearch = (e) => setSearch(e.target.value);
	const handleClear = () => setSearch("");
	
	
	//Handle search filters
	const filters = {fFrom: ["Gale"], fFor: ["Journals", "Books", "Magazines", "News"]};
	const [filtered, setFiltered] = React.useState({fFrom: [], fFor: []});
	const setFilter = (filter, target) => setFiltered({...filtered, [target]: [filter]});
	const unsetFilter = (filter, target) => setFiltered({...filtered, [target]: filtered[target].filter(i => i!=filter)});
	
	const submitSearch = () => props.submitSearch(search, filtered.fFor[0], filtered.fFrom[0]);
	
	return (
		<FormControl fullWidth>
			<Grid xs={12} item container>
				<Grid item xs={12} md={10}>
					<SearchField
						search={search}
						handleSearch={handleSearch}
						handleClear={handleClear}
						filters={filters}
						filtered={filtered}
						setFilter={setFilter}
						unsetFilter={unsetFilter}
						submitSearch={submitSearch}
					/>
				</Grid>
				<Grid item xs={12} md={2}>
					<Button 
						fullWidth 
						color="primary" 
						variant="contained" 
						style={{height: '100%'}}
						onClick={submitSearch}
					> Search </Button>
				</Grid>
			</Grid>
		</FormControl>
	);
}

export default Search;