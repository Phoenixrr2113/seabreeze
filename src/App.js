import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		backgroundImage: 'url(' + imgUrl + ')',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	},
}));

const imgUrl =
	'https://res.cloudinary.com/dlrdfp08e/image/upload/v1560956879/seabreeze/axtail-dinner-background.jpg';

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Layout>
				<Home />
			</Layout>
		</div>
	);
}

export default App;
