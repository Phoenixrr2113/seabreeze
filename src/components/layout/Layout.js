import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from '../navigation/NavBar';
import Footer from '../footer/Footer';

const Layout = props => {
	return (
		<React.Fragment>
			<CssBaseline />
			<NavBar />
			<Container maxWidth='md'>
				{props.children}
				<Footer />
			</Container>
		</React.Fragment>
	);
};

export default Layout;
