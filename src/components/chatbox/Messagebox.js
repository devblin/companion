import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './style';


export default function MessageBox(props) {
    const classes = useStyles();

    let borderColor = "", float = "left";
    if(props.user === 'You') {
        borderColor = "darkblue";
        float = "right";
    }

    return (
        <div style={{width:'100%'}}>
            <Card className={classes.messageBox} variant="outlined" style={{borderColor:borderColor, float:float}}>
                <CardContent style={{padding:10}}>
                    <Typography className={classes.messageBoxTitle} color="textSecondary" >
                        {props.user}
                    </Typography>
                    <Typography>
                        {props.message}
                    </Typography>
                    <Typography className={classes.messageBoxTitle} color="textSecondary">
                        {Date().split(' GMT')[0]}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}