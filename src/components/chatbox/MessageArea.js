import React from 'react'
import MessageBox from './Messagebox';
import { useStyles } from './style';

export default function MessageArea(props) {    
    const classes = useStyles();
    const messages = [];

    props.messages.map((e, i) => {
        messages.push(<MessageBox key={i} user={e.type} message={e.message}></MessageBox>)
    })

    const renderMessage = () => {
        if(messages.length) return messages;
        else return <h1>Say, Hi</h1>;
    }

    return (
        <div className={classes.messageAreaContainer}>
            {renderMessage()}
        </div>
    )
}   
