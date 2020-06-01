//UTILS
import React from 'react';

//Material components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


import makeStyles from '@material-ui/styles/makeStyles';

const useStyle = makeStyles({
	label: {
		padding: 5,
		textAlign: "center",
	},
});

const Filter = (props) => {
	const classes = useStyle();
	const handleChange = (item, target) => {
		if (item == props.filtered[target].find(i => item==i)) {
			props.unsetFilter(item, target);
			return false;
		}
		props.setFilter(item, target);
		
	};
	const filters = (target) => {
		return props.filters[target].map((item, index) => {
			return (
				<Grid item key={index}>	
					<FormControlLabel
						control={ 
							<Checkbox
								checked={(props.filtered[target].find(i => i==item)) ?true :false}
								onChange={handleChange.bind(this, item, target)}
								value={item}
							/>
						}	
						label={item}
					/>
				</Grid>
				);				
		});
	}
	return (
		<FormControl component="fieldset">
			<FormLabel className={classes.label}> Filters </FormLabel>
			<FormGroup>
				<Grid container direction="column" item xs={12}>
					<Grid item container direction="column">
						<Typography> Search from: </Typography>
						<Divider style={{width: '100%'}} />
						<Grid container direction="row">
							{filters('fFrom')}
						</Grid>
					</Grid>
					<Grid item container direction="column">
						<Typography> Search for: </Typography>
						<Divider style={{width: '100%'}} />
						<Grid container direction="row">
							{filters('fFor')}
						</Grid>
					</Grid>
				</Grid>
			</FormGroup>
		</FormControl>
	);
}

export default Filter;