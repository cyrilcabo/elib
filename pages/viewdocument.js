//Custom components
import Layout from '../components/layout';

//Material Components
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//UTILS
import {useRouter} from 'next/router';
import {connect} from 'react-redux';
import {useRef, useEffect} from 'react';

//Redux actions
import {viewDocument}  from '../redux/actions/actions';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
	root: {
		textAlign: 'center'
	},
	withPadding: {
		padding: "10px 0px 10px 0px",
	},
	paper: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		padding: "10px 0px 10px 0px"
	},
	content: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'justify',
	}
});

const ViewDocument = (props) => {
	const classes = useStyle();
	const contentContainer = useRef(null);
	
	const {title, authors, pubDate, publication, publisher, content, copyright} = props.currentDocument;
	
	useEffect(() => {
		const contentEl = contentContainer.current;
		contentEl.innerHTML = content;
		for (let i = 0; i < contentEl.children.length; i++) {
			if (contentEl.children[i].querySelector("span.imageGroup")) contentEl.children[i].style.textAlign = "center";
		}
	}, [content]);
	
	return (
		<Layout noPadding>
			<Grid item xs={12} justify="center" container className={classes.root}>
				<Grid item xs={12} md={10}>
					<Paper className={classes.paper}>
						<Grid item container direction="column" alignItems="center" className={classes.withPadding}>
							<Typography variant="h4"> {title} </Typography>
							<Typography variant="h6"> {authors} </Typography>
						</Grid>
						<Divider style={{width: '90%'}} />
						<Grid item container justify="space-around" className={classes.withPadding}>
							<Grid item xs={12} md={4} container alignItems="center" direction="column">
								<Typography variant="h6"><b> Publication date </b></Typography>
								<Typography> {pubDate} </Typography>
							</Grid>
							<Grid item xs={12} md={4} container alignItems="center" direction="column">
								<Typography variant="h6"><b> Publisher </b></Typography>
								<Typography> {publisher} </Typography>
							</Grid>
							<Grid item xs={12} md={4} container alignItems="center" direction="column">
								<Typography variant="h6"><b> Publication </b></Typography>
								<Typography> {publication} </Typography>
							</Grid>
						</Grid>
						<Divider style={{width: '90%'}} />
						<Grid item style={{padding: 20}}>
							<div ref={contentContainer} className={classes.content}> </div>
						</Grid>
						<Divider style={{width: '90%'}} />
						{copyright
							?<Grid item className={classes.withPadding}>
								<h3> Copyright: </h3>
								{copyright}
							</Grid>
							:""
						}
					</Paper>
				</Grid>
			</Grid>
		</Layout>
	);
}

ViewDocument.getInitialProps = async ({store, req, query}) => {
	const id = query.id;
	await store.dispatch(viewDocument(id));
}

export default connect(state => ({currentDocument: state.currentDocument}))(ViewDocument);