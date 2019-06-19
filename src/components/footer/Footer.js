import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(1),
	},
	links: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	title: {
		fontFamily: `url('https://fonts.googleapis.com/css?family=Open+Sans|Rock+Salt&display=swap')`,
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='relative'>
				<Toolbar variant='dense'>
					<Typography variant='h6' color='inherit'>
						185 W Chance A La Mer, Ocean Shores, WA 98569.
					</Typography>
					<Typography variant='h6' color='inherit'>
						|
					</Typography>
					<Typography variant='h6' color='inherit'>
						Tel 360-289-9900
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Footer;
