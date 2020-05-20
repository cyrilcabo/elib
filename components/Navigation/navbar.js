import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton' 
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useState, Fragment} from 'react';
import NavDrawer from './navdrawer';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles( theme => ({
	appbar: {
		backgroundColor: "black",
		[theme.breakpoints.down("xs")]: {
			height: 65,
		},
	},
	linkContainer:{
		[theme.breakpoints.up("md")]: {
			marginLeft: 10,
			marginRight: 10,
		}
	},
	links: {
		color: "white",
		fontSize: 14,
		margin: 0,
	},
	navbar: {
		display: "flex",
		flexDirection: "row",
		width: "90%",
		[theme.breakpoints.down("xs")]: {
			paddingTop: 5,
		}
	},
	title: {
		flex: 1,
	}
}));

const NavBar = () => {
	const classes = useStyle();
	const [toggle, toggleDrawer] = useState(false);
	
	//Navigation Links
	const navs = [{name: "Home", link: "/"}, {name: "Library", link: "/library"}, {name: "About", link: "/about"}];
	const navLinks = navs.map((item, index) => {
		return <Link href={item.link} key={index}>
					<Button className={classes.linkContainer} >
						<Typography variant="h5" component="h6" className={classes.links}>
							{item.name}
						</Typography>
					</Button>
				</Link>
	});
	const drawerToggle = () => toggleDrawer((toggle) ?false :true);
	return (
		<Fragment>
			<AppBar position="absolute" color="secondary" className={classes.appbar}>
				<Container>
						<Toolbar className={classes.navbar}>
							<Hidden smUp>
								<IconButton edge="start" onClick={drawerToggle} >
									<MenuIcon style={{color: "white"}} />
								</IconButton>
							</Hidden>
							<NavDrawer nav={navs} toggle={toggle} toggleDrawer={drawerToggle}/>
							<Typography variant="h5" component="h6" className={classes.title} >
								E-Library
							</Typography>
							<Hidden xsDown>
								{navLinks}
							</Hidden>
						</Toolbar>	
				</Container>
			</AppBar>
			<Toolbar />
		</Fragment>
	);
};

export default NavBar;