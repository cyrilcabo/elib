//Material Components
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//Material Icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AnnouncementIcon from '@material-ui/icons/Announcement';

//Utils
import {makeStyles} from '@material-ui/core/styles';
import Link from 'next/link';

//Import images
import NavbarLogo from '../../public/logo/navbar.png';

const useStyles = makeStyles({
	root: {
		zIndex: 1000,
		"& > div.MuiPaper-root": {
			backgroundColor: '#1f0808',
			color: 'white',
		}
	},
	fullList: {
		width: 250,
	},
	links: {
		margin: 0,
		fontSize: 20,
		fontFamily: "DejaVu, Serif",
	},
	listHeader: {
		margin: "20px 0px 5px 0px",
		textAlign: "center",
	},
	logo: {
		border: '2px solid #b99712',
		margin: 0,
	},
	title: {
		margin: 0,
		fontSize: 25,
		fontFamily: "DejaVu, Serif",
		fontSize: '1.4rem',
	},
	icons: {
		fill: 'white',
	},
	listItem: {
		"&:hover": {
			backgroundColor: 'gray',
		},
		'& p': {
			fontSize: '1rem',
		}
	}
});

const NavDrawer = (props) => {
	const classes = useStyles();
	const icons = [<HomeIcon className={classes.icons} />, <InfoIcon className={classes.icons} />, <AnnouncementIcon className={classes.icons} />];
	const navDrawer = props.nav.map((link, index) => {
		return (
		<Link href={link.link} key={index}>
			<div className={classes.listItem}>
					<ListItem button>
						<ListItemIcon> {icons[index]} </ListItemIcon>
						<ListItemText primary={
								<p className={classes.links}>
									{link.name}
								</p>
						} />
					</ListItem>
			</div>
		</Link>
		);
	});
	return (		
		<Hidden mdUp>
			<Drawer open={props.toggle} onClose={props.toggleDrawer} className={classes.root}>
				<ListSubheader color="inherit" className={classes.listHeader}> 
					<Grid item xs={12} container direction="column" alignItems="center">	
						<img src={NavbarLogo} className={classes.logo} />
						<h6 className={classes.title}> E-Lib </h6>
					</Grid>
				</ListSubheader>
				<Divider component="li" style={{backgroundColor: '#b89720', height: 2}}/>
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