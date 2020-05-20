//Material Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

//Custom components
import Layout from '../components/layout';
import AboutHeader from '../components/About/header';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles(theme => ({
	root: {
		minHeight: 500,
	},
	moreInfo: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		padding: 5,
		height: '100%',
		backgroundColor: '#fff4f4',
	},
	teamHolder: {
		textAlign: 'center', 
		padding: '10px 0px 10px 0px',
		minHeight: 320, 
		backgroundImage: 'linear-gradient(to right, gray, #791616)',
	},
	teamCard: {
		padding: 20,
	},
	teamMember: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		padding: "15px 5px 15px 5px",
		backgroundColor: 'inherit',
	}
}));

const About = () => {
	const classes = useStyle();
	const moreInfo = [
		{
			title: 'OUR MISSION',
			content: 'ELib will utilize modern technologies to overcome traditional systems have faced. ELib will work hard to supply high modern demands of knowledge and information.',
			
		},
		{
			title: 'WHAT WE DO',
			content: 'ELib serves students with accessible information over convenient means, prioritizing speed and efficiency.',
			
		},
		{
			title: 'OUR VISION',
			content: 'ELib aims to close the gap between students and valuable information; ELib will serve what was inaccesible knowledge to any student who may need them.',
			
		}].map((item, index) => {
		return (
			<Grid item xs={12} md={4} key={index}>
				<Paper elevation={4} className={classes.moreInfo}>
					<Typography variant="h5"> {item.title} </Typography>
					<Divider style={{width: '80%'}} />
					<p style={{fontSize: '1.2em', color: '#505050'}}> {item.content} </p>
				</Paper>
			</Grid>
		);
	});
	
	const team = [
		{
			id: '01',
			name: "Yolanda C. Cabo",
			title: "Librarian",
			description: "Oversees the whole library operation and managenment of EVSU-TC Library.",
		},
		{
			id: '01',
			name: "Yolanda C. Cabo",
			title: "Librarian",
			description: "Oversees the whole library operation and managenment of EVSU-TC Library.",
		},
		{
			id: '01',
			name: "Yolanda C. Cabo",
			title: "Librarian",
			description: "Oversees the whole library operation and managenment of EVSU-TC Library.",
		},
	].map(member => {
		return (
			<Grid item xs={12} md={4} key={member.id}>
				<Paper className={classes.teamMember} elevation={0} square>
					<Avatar style={{height: 100, width: 100}}>
						Y
					</Avatar>
					<Typography variant="h6"> {member.name} </Typography>
					<Typography> <b> {member.title} </b> </Typography>
					<Divider style={{width: '80%', backgroundColor: '#e8e8e8'}} />
					<Typography style={{marginTop: 5}}> {member.description} </Typography>
				</Paper>
			</Grid>
		);
	});
	
	return (
		<Layout noPadding>
			<AboutHeader />
			<Grid xs={12} justify="center" item container style={{margin: "50px 0px 80px 0px"}}>
				<Grid item xs={12} md={10} container justify="space-around" spacing={2}>
					{moreInfo}
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Paper square elevation={0} className={classes.teamHolder}>
					<Grid item>
						<Typography variant="h5"> TEAM </Typography>
					</Grid>
					<Grid item xs={12} container alignItems="center" direction="column" className={classes.teamCard}>
						<Grid item xs={10} container spacing={3} justify="space-around">
							{team}
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12} container justify="center" style={{marginTop: 10}}>
				<p><b> &copy; A++ Development 2020 </b></p>
			</Grid>
		</Layout>
	);
}

export default About;