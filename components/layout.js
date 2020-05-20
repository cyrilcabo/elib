import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import Head from 'next/head';
import Navbar from './Navigation/navbar';

import Grid from '@material-ui/core/Grid';

import makeStyles from '@material-ui/core/styles/makeStyles';

const theme = createMuiTheme();

const useStyle = makeStyles(theme => ({
	root: {
		padding: 10,
		[theme.breakpoints.down('xs')]: {
			padding: "10px 0px 20px 0px",
		}
	},
	noPadding: {
		padding: '10px 0px 20px 0px',
		[theme.breakpoints.down('xs')]: {
			padding: "10px 0px 20px 0px",
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
				</Grid>
				<style jsx global>{`
					body {
						background-color: #f3f3f3;
						margin: 0;
					}
				`}</style>
			</ThemeProvider>
		</div>
	);
}

export default Layout;