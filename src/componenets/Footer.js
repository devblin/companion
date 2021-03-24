import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		width: '100%'
	},
	main: {
		marginTop: theme.spacing(8),
	},
	footer: {
		padding: theme.spacing(1, 4),
		marginTop: 'auto',
		textAlign: 'center'
	},
}));

export default function StickyFooter() {
	const classes = useStyles();

	return (
		<div>
			<Container maxWidth="sm" className={classes.footer}>
				<Typography variant="body1">
					My sticky footer can be found here.
				</Typography>
			</Container>
		</div>
	);
}
