import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 275,
        margin: 5,
        padding: 1,
        height: 100
    },
    title: {
        fontSize: 12,
    }
});

export default function MessageBox(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" >
                    Robot
                </Typography>
                <Typography variant="h6" component="h2">
                    {props.message}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                    12:00am
                </Typography>
            </CardContent>
        </Card>
    );
}