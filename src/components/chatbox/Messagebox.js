import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    messageBox:{
        margin: 5,
        maxWidth: 450,
        wordBreak: "break-all",
        textAlign: 'start'
    }
}))

export default function MessageBox(props) {
    const classes = useStyles();

    let borderColor = "", float = "left";
    if(props.user === 'You') {
        borderColor = "darkblue";
        float = "right";
    }

    return (
        <div>
            <Card className={classes.messageBox} variant="outlined" style={{borderColor:borderColor, float:float}}>
                <CardContent style={{padding:10}}>
                    <Typography className={classes.messageBoxTitle} color="textSecondary" >
                        {props.user}
                    </Typography>
                    <Typography>
                        {props.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
