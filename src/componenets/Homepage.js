import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	main: {
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(2),
		minHeight: '100vh',
	},
}));
const Navbar = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<AppBar variant="fixed">
				<Toolbar variant="dense">
					<Typography>Companion</Typography>
				</Toolbar>
			</AppBar>
			<Box bgcolor="info.main" className={classes.main}>
				<Container>Hii</Container>
			</Box>
		</React.Fragment>
	);
};
export default Navbar;
