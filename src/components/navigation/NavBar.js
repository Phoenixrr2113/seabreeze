import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		paddingTop: 50,
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

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar color='default' position='fixed'>
				<Container maxWidth='md'>
					<Toolbar className={classes.links}>
						<Typography variant='h6' className={classes.title}>
							Sea Breeze
						</Typography>

						<Button color='inherit'>Our Story</Button>
						<Button color='inherit'>Menu</Button>
						<Button color='inherit'>Contact</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}
