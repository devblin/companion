import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import {useStyles} from './style';
import MessageArea from './MessageArea';


export default function Chatbox() {
    const classes=useStyles();
    return (
        <div>
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} s={10} md={9}>
                    <Paper>
                        <AppBar position='sticky' className={classes.heading}>
                            <Toolbar className={classes.heading}>
                                <Typography variant='h6'>Chat Area</Typography>
                            </Toolbar>
                        </AppBar>    
                    </Paper>
                    <Paper>
                        <div className={classes.messageArea}>
                            <MessageArea className={classes.messageArea}/>
                        </div>
                        <TextField 
                            id="standard-basic" 
                            placeholder="Enter text" 
                            margin="normal"
                            style ={{width: '100%'}}
                            inputStyle ={{width: '100%'}}
                            fullWidth={true}
                        />
                    </Paper>  
                </Grid>  
            </Grid>
        </div>
    )
}
