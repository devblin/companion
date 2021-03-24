import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import {useStyles} from './style';
import MessageArea from './MessageArea';


class Chatbox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:''
        }
    }
    handleChange=(e)=>{
        this.setState({message: e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.message)
    }
    render(){
        const {classes}=this.props;
        return (
            <div>
                <Grid container spacing={1} justify="center">
                    <Grid item xs={11} s={10} md={9} lg={6}>
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
                            <Grid container>
                                <form onSubmit={this.handleSubmit} className={classes.inputForm}>
                                    <Grid item xs={10}>
                                        <TextField 
                                            id="standard-basic" 
                                            placeholder="Enter Text" 
                                            margin="normal"
                                            className ={classes.textBox}

                                            fullWidth={true}
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton aria-label='add' color='primary' type='submit'>
                                            <SendIcon />
                                        </IconButton>
                                    </Grid>
                                </form>
                            </Grid>
                        </Paper>  
                    </Grid>  
                </Grid>
            </div>
        )
    }
}

export default withStyles(useStyles)(Chatbox)
