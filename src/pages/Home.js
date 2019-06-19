import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Header from '../components/header/Header';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		color: 'white',
		fontWeight: 'bold',
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	heading: {
		color: 'white',
		fontSize: 80,
		textAlign: 'center',
	},
	heading2: {
		color: 'white',
		fontSize: 40,
		textAlign: 'center',
	},
	input: {
		display: 'none',
	},
}));
const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.main}>
				<Header />
				<div className={classes.buttons}>
					<Button variant='outlined' color='inherit' className={classes.button}>
						See Menu
					</Button>
					<Button variant='outlined' color='inherit' className={classes.button}>
						Order Online
					</Button>
					<Button variant='outlined' color='inherit' className={classes.button}>
						Reservations
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Home;
