import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import {useStyles} from './style';
import MessageArea from './MessageArea';

import questions from '../questions';

const pd = require("paralleldots");
pd.apiKey = process.env.REACT_APP_PARALLELDOTS_API;

class Chatbox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            messages: [],
            index: 0
        }

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage() {
        let messageBox = document.getElementById("text-box");
        let messageVal = messageBox.value;

        if(messageVal) {
            let newMessages = [...this.state.messages, {type:'You', message:messageVal}];
            this.setState({
                messages: newMessages
            })
            messageBox.value = "";

            pd.emotion(messageVal).then((res) => {
                let question;
                let index = Math.floor(Math.random() * 5);
                let emotions = JSON.parse(res).emotion;
                console.log(emotions);
                let maxEmotion = JSON.parse(this.getMaxEmotion(emotions));

                if(this.state.index < 2) {
                    question = questions.Intro[this.state.index];
                }
                else if(maxEmotion.score > 0.5) {
                    console.log('Share Resources', 'Nice to meet you, human');
                    question = "Nice to meet you, human :)";
                }
                else {
                    question = questions[maxEmotion.emotion][index];
                }
                console.log(questions[maxEmotion.emotion]);
                this.setState({
                    index: ++this.state.index
                })
                console.log(question);
                let botMsg = question;

                newMessages = [...newMessages, {type:'Bot', message:botMsg}];
                this.setState({
                    messages: newMessages
                })
            }).catch((e) => {
                console.log(e);
            });
        }
    }

    getMaxEmotion(emotions) {
        let maxEmotion = { emotion:'', score:0 };
        for(let e in emotions) {
            if(emotions[e] > maxEmotion.score) {
                maxEmotion.score = emotions[e];
                maxEmotion.emotion = e;
            }
        }
        console.log(maxEmotion);
        return JSON.stringify(maxEmotion);
    }

    render(){
        const {classes}=this.props;
        return (
            <div className={classes.chatBoxContainer}>
                <Grid container spacing={1} justify="center">
                    <Grid item xs={12} sm={9} md={6} lg={6}>
                        <Paper>
                            <div className={classes.messageArea} style={{width:"100%"}}>
                                <MessageArea messages={this.state.messages}/>
                            </div>
                            <div style={{display:'flex', padding:10}}>
                                <TextField 
                                    id="text-box" 
                                    placeholder="Enter Text" 
                                    margin="normal"
                                    className ={classes.textBox}
                                    variant="outlined"
                                    fullWidth={true}
                                />
                                <IconButton onClick={this.sendMessage} aria-label='add' color='primary' type='submit'>
                                    <SendIcon />
                                </IconButton>
                            </div>
                        </Paper>  
                    </Grid>  
                </Grid>
            </div>
        )
    }
}

export default withStyles(useStyles)(Chatbox)
