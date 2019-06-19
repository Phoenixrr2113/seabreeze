import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const Header = () => {
	const classes = useStyles();
	return (
		<div>
			<Typography className={classes.heading} variant='h6'>
				Sea Breeze
				<br />
				<span>BBQ</span>
			</Typography>
			<Typography className={classes.heading2} variant='h6'>
				Jamaican Cuisine
			</Typography>
		</div>
	);
};

export default Header;
