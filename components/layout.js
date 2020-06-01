//Custom components
import Navbar from './Navigation/navbar';
import Footer from './Footer/footer';

//Material Components
import Grid from '@material-ui/core/Grid';

//Utils
import makeStyles from '@material-ui/core/styles/makeStyles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import Head from 'next/head';

const theme = createMuiTheme();

const useStyle = makeStyles(theme => ({
	root: {
		padding: "10px 10px 0px 10px",
		[theme.breakpoints.down('xs')]: {
			padding: "10px 0px 0px 0px",
		}
	},
	noPadding: {
		padding: '10px 0px 0px 0px',
		[theme.breakpoints.down('xs')]: {
			padding: "10px 0px 0px 0px",
		}
	}
}));

const Layout = (props) => {
	const classes = useStyle();
	return (
		<div>
			<Head>
				<title> E-Library </title>
			</Head>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Grid item xs={12} container justify="center" className={props.noPadding ?classes.noPadding :classes.root}>
					{props.children}
					<Footer />
				</Grid>
				<style jsx global>{`
					body {
						background-color: #f0e9e9;
						margin: 0;
					}
				`}</style>
			</ThemeProvider>
		</div>
	);
}

export default Layout;