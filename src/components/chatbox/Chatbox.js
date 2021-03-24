import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

import {useStyles} from './style';
import MessageArea from './MessageArea';

const pd = require('paralleldots');
pd.apiKey = process.env.REACT_APP_PARALLELDOTS_API;

export default function Chatbox() {
    const classes=useStyles();
    let [messages, setMessages] = useState([]);

    const getMaxEmotion = (emotions) => {
        let maxEmotion = { emotion:'', score:0};
        for(let e in emotions) {
            if(emotions[e] > maxEmotion.score) {
                maxEmotion.score = emotions[e];
                maxEmotion.emotion = e;
            }
        }
        console.log(maxEmotion);
        return JSON.stringify(maxEmotion);
    }

    const sendMessage = () => {
        let messageBox = document.getElementById("text-box");
        let messageVal = messageBox.value;

        if(messageVal) {
            let newMessages = [...messages, {type:'You', message:messageVal}];
            setMessages(newMessages)
            messageBox.value = "";

            pd.emotion(messageVal).then((res) => {
                let emotions = JSON.parse(res).emotion;
                console.log(emotions);
                let maxEmotion = JSON.parse(getMaxEmotion(emotions));

                let botMsg = "Are you, " + maxEmotion.emotion;

                newMessages = [...newMessages, {type:'Bot', message:botMsg}];
                setMessages(newMessages)
            }).catch((e) => {
                console.log(e);
            });
        }
    };


    return (
        <div className={classes.chatBoxContainer}>
            <Grid container spacing={1} justify="center" style={{maxWidth:'700px'}}>
                <Grid item xs={12} sm={9}>
                    <Paper>
                        <div className={classes.messageArea}>
                            <MessageArea messages={messages} className={classes.messageArea}/>
                        </div>
                        <div style={{display:'flex'}}>
                            <TextField 
                                variant="outlined"
                                id="text-box" 
                                placeholder="Enter text" 
                                margin="normal"
                                style ={{width: '100%', margin:0}}
                                fullWidth={true}
                            />
                            <IconButton onClick={sendMessage} color="primary" aria-label="send">
                                <SendIcon/>
                            </IconButton>
                        </div>
                    </Paper>  
                </Grid>  
            </Grid>
        </div>
    )
}
