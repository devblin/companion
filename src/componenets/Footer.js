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
	},
	main: {
		marginTop: theme.spacing(8),
	},
	footer: {
		padding: theme.spacing(1, 4),
		marginTop: 'auto',
	},
}));

export default function StickyFooter() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container component="main" className={classes.main} maxWidth="sm">
				<Typography variant="h2" component="h1" gutterBottom>
					Sticky footer
				</Typography>
				<Typography variant="h5" component="h2" gutterBottom>
					Content
				</Typography>
				<Typography variant="body1">
					Sticky footer placeholder.
				</Typography>
			</Container>
			<footer>
				<Container maxWidth="sm" className={classes.footer}>
					<Typography variant="body1">
						My sticky footer can be found here.
					</Typography>
				</Container>
			</footer>
		</div>
	);
}
