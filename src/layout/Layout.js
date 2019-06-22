import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/footer/Footer';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
}));

const Layout = props => {
	const classes = useStyles();
	return (
		<div>
			<CssBaseline />
			<NavBar />
			<Container maxWidth='md'>{props.children}</Container>
			<Footer />
		</div>
	);
};

export default Layout;
