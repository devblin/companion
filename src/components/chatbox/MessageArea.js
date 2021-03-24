import React from 'react'
import MessageBox from './Messagebox';

export default function MessageArea(props) {
    const messages = [];

    props.messages.map((e, i) => {
        messages.push(<MessageBox key={i} user={e.type} message={e.message}></MessageBox>)
    })

    const renderMessage = () => {
        if(messages.length) return messages;
        else return <h1>👋 Say, Hi</h1>;
    }

    return (
        <div style={{width:'100%', display:'grid', height:'min-content', overflowY:'auto',}}>
            {renderMessage()}
        </div>
    )
}
