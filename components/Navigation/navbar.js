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

//Import images
import NavbarLogo from '../../public/logo/navbar.png';

const useStyle = makeStyles( theme => ({
	appbar: {
		backgroundColor: "#320505",
		[theme.breakpoints.down("xs")]: {
			height: 65,
		},
	},
	linkContainer:{
		cursor: 'pointer',
		marginLeft: 10,
		marginRight: 10,
	},
	links: {
		color: "white",
		fontSize: 17,
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
					<div className={classes.linkContainer} >
						<p className={classes.links}>
							{item.name}
						</p>
					</div>
				</Link>
	});
	const drawerToggle = () => toggleDrawer((toggle) ?false :true);
	return (
		<Fragment>
			<AppBar position="absolute" className={classes.appbar}>
				<Container style={{display: 'flex', justifyContent: 'center'}}>
						<Toolbar className={classes.navbar}>
							<Hidden smUp>
								<IconButton edge="start" onClick={drawerToggle} >
									<MenuIcon style={{color: "white"}} />
								</IconButton>
							</Hidden>
							<Hidden smDown>
								<IconButton edge="start"> <img src={NavbarLogo} /> </IconButton>
							</Hidden>
							<NavDrawer nav={navs} toggle={toggle} toggleDrawer={drawerToggle}/>
							<h2 className={classes.title} >
								E-Library
							</h2>
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