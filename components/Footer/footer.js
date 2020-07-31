//Material Components
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

//Utils
import makeStyles from '@material-ui/core/styles/makeStyles';

//Images
import FooterLogo from '../../public/logo/footer.png';
import Facebook from '../../public/Social Icons/Facebook.png';
import Twitter from '../../public/Social Icons/Twitter.png';
import Instagram from '../../public/Social Icons/Instagram.png';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 300,
		width: '100%',
		paddingBottom: 20,
		backgroundColor: '#080808',
		marginTop: 20,
		color: '#f0e9e9'
	},
	logoHolder: {
		justifyContent: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		}
	},
	evsuInfo: {
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	address: {
		textAlign: 'left',
		"& > p": {
			margin: 0,
		},
		flex: 1,
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		}
	},
	contact: {
		flexDirection: 'column',
		alignItems: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
		}
	},
	contactInfo: {
		justifyContent: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-between',
		},	
	},
	socialContainer: {
		"& > button.MuiButtonBase-root": {
			padding: 0,
		}
	},
	developerInfo: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		}
	},
}));

const Footer = () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<Grid item container xs={12} justify="center" style={{marginTop: 50}} spacing={4}>
				<Grid item container xs={12} md={8} justify="center" spacing={2}>
					<Grid item xs={12} md={6} container justify="flex-start" alignItems="center" spacing={2} className={classes.evsuInfo}>
						<Grid item className={classes.logoHolder}>
							<img src={FooterLogo} />
						</Grid>
						<Grid item className={classes.address}>
							<p> &copy; E-Lib 2020 </p>
							<p> Eastern Visayas State University </p>
							<p> Tanauan Campus, Havana St., </p>
							<p> Tanauan, Leyte, 6502, Region VIII, Philippines </p>
						</Grid>
					</Grid>
					<Grid item xs={10} sm={6} container className={classes.contact}>
						<Grid item>
							<h6 style={{fontSize: '1.5em', margin: "0px 0px 15px 0px"}}> Contact us </h6>
						</Grid>
						<Grid item container className={classes.contactInfo} spacing={1}>
							<Grid item>
								<p style={{margin: 0}}> evsulib@evsu.edu.ph </p>
							</Grid>
							<Grid item>
								<svg 
									xmlns="http://www.w3.org/2000/svg"
						 			width="0.444in" 
						 			height="0.292in">
										<path 
											fillRule="evenodd"  
											fill="rgb(186, 152, 18)"
											d="M22.224,9.145 L31.995,1.487 L31.995,20.870 L22.224,9.145 ZM0.126,-0.005 L31.915,-0.005 L16.021,12.454 L0.126,-0.005 ZM0.005,20.921 L0.032,1.474 L9.818,9.145 L0.005,20.921 ZM16.017,14.004 L16.017,14.010 L16.021,14.007 L16.025,14.010 L16.025,14.004 L21.441,9.759 L30.808,20.999 L1.234,20.999 L10.601,9.759 L16.017,14.004 Z"/>
								</svg>
							</Grid>
						</Grid>
						<Grid item container className={classes.contactInfo} alignItems="center" spacing={1}>
							<Grid item>
								<p style={{margin: 0}}> 09123456789 </p>
							</Grid>
							<Grid item>
								<svg 
								 	xmlns="http://www.w3.org/2000/svg"
								 	width="0.444in" 
						 			height="0.292in">
									<path 
										fillRule="evenodd"  
										fill="rgb(186, 152, 18)"
								 		d="M22.748,-0.001 L4.251,-0.001 C1.900,-0.001 -0.007,2.041 -0.007,4.569 L-0.007,24.431 C-0.007,26.955 1.900,29.001 4.251,29.001 L22.748,29.001 C25.100,29.001 27.007,26.955 27.007,24.431 L27.007,4.569 C27.007,2.041 25.100,-0.001 22.748,-0.001 ZM13.092,3.026 L13.388,8.028 L12.313,8.362 L11.796,2.891 L13.092,3.026 ZM17.710,25.672 L12.992,25.568 C5.200,16.620 6.469,6.213 6.469,6.213 L10.019,2.937 L10.718,2.937 L11.287,8.660 L9.734,9.767 L13.706,20.941 L15.263,20.408 L18.249,25.185 L17.710,25.672 ZM19.209,24.607 L16.050,19.907 L17.247,19.355 L20.001,23.757 L19.209,24.607 Z"/>
								</svg>
							</Grid>
						</Grid>
						<Grid item container className={classes.contactInfo} alignItems="center" spacing={1}>
							<Grid item>
								<p style={{margin: 0}}> 325-1650 </p>
							</Grid>
							<Grid item>
								<svg 
								 	xmlns="http://www.w3.org/2000/svg"
									width="0.444in" 
						 			height="0.292in">
									<path 
										fillRule="evenodd"  
										fill="rgb(186, 152, 18)"
								 		d="M29.982,7.637 C29.967,6.791 29.830,3.160 28.549,2.487 C25.913,1.103 19.400,-0.001 14.994,-0.001 C10.588,-0.001 4.075,1.103 1.439,2.487 C0.157,3.161 0.021,6.797 0.007,7.639 C-0.015,7.885 -0.013,8.127 0.017,8.344 L0.268,10.068 C0.401,11.012 1.066,11.628 1.754,11.446 L7.533,9.909 C8.221,9.727 8.670,8.814 8.537,7.871 L8.237,5.742 C8.770,5.640 9.305,5.544 9.834,5.455 L9.662,8.899 C9.662,8.899 1.041,15.206 1.041,17.550 C1.041,19.894 1.041,29.001 1.041,29.001 L14.994,29.001 L28.947,29.001 C28.947,29.001 28.947,19.818 28.947,17.550 C28.947,15.283 20.327,8.899 20.327,8.899 L20.154,5.455 C20.684,5.544 21.218,5.640 21.751,5.742 L21.451,7.871 C21.318,8.814 21.768,9.727 22.455,9.909 L28.235,11.446 C28.922,11.628 29.587,11.012 29.720,10.068 L29.971,8.344 C30.001,8.127 30.003,7.884 29.982,7.637 ZM14.994,4.927 C15.530,4.927 17.585,5.059 18.194,5.165 C18.194,5.150 17.995,8.568 17.990,8.558 L14.994,8.558 L11.998,8.558 L11.813,5.163 C12.975,5.016 14.063,4.927 14.994,4.927 ZM14.995,24.305 C12.769,24.305 10.965,22.002 10.965,19.161 C10.965,16.320 12.769,14.017 14.995,14.017 C17.220,14.017 19.024,16.320 19.024,19.161 C19.024,22.002 17.220,24.305 14.995,24.305 Z"/>
								</svg>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} container justify="center">
					<Grid item xs={10} sm={8}>
						<Divider style={{width: '100%', height: 5, backgroundColor: '#b99712'}} />
					</Grid>
				</Grid>
				<Grid item xs={12} container justify="center">
					<Grid item xs={10} sm={4} container justify="space-around" className={classes.socialContainer}>
						<IconButton>
							<img src={Facebook} />
						</IconButton>
						<IconButton>	
							<img src={Twitter} />
						</IconButton>
						<IconButton>	
							<img src={Instagram} />
						</IconButton>
					</Grid>
				</Grid>
				<Grid item xs={12} className={classes.developerInfo}>
					<p style={{
						padding: 0,
						margin: "0px 0px 0px 10px",
						fontSize: '0.8rem'
					}}> Alpha Development 2020 </p>
				</Grid>
			</Grid>
		</div>
	);
}

export default Footer;