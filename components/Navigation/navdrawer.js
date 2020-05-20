import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Link from 'next/link';

const useStyles = makeStyles({
	root: {
		zIndex: 1000,
	},
	fullList: {
		width: 250,
	},
	listHeader: {
		margin: 10,
		textAlign: "center",
	},
});

const NavDrawer = (props) => {
	const icons = [<HomeIcon />, <InfoIcon />, <AnnouncementIcon />];
	const classes = useStyles();
	const navDrawer = props.nav.map((link, index) => {
		return (
		<div key={index}>
			<ListItem button>
				<ListItemIcon> {icons[index]} </ListItemIcon>
				<ListItemText primary={
					<Link href={link.link} >
						<Typography component={"h5"}>
							{link.name}
						</Typography>
					</Link>
				} />
			</ListItem>
		</div>
		);
	});
	return (		
		<Hidden mdUp>
			<Drawer open={props.toggle} onClose={props.toggleDrawer} className={classes.root}>
				<ListSubheader color="inherit" className={classes.listHeader}> 
					<Typography variant="h6" component="h5"> E-Lib </Typography>
				</ListSubheader>
				<Divider component="li" />
				<div className={classes.fullList}>
					<List>
						{navDrawer}
					</List>
				</div>
			</Drawer>
		</Hidden>
	);
}

export default NavDrawer;