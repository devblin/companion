import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    heading:{
        display:'flex',
        alignContent:'center',
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'green'
    },
    messageArea:{
        display:'flex',
        height:'70vh',
        maxHeight:'800px',
        minHeight:'450px',
        overflowY:'auto'
    },
    messageBox: {
        maxWidth: 275,
        width: 'auto',
        margin: 5,
        height: 'auto',
        textAlign:'left',
    },
    messageBoxTitle: {
        fontSize: 12,
    },
    messageAreaContainer: {
        width:'100%', 
        display:'grid', 
        height:'min-content', 
        overflowY:'auto'
    },
    chatBoxContainer: {
        display:'flex', 
        justifyContent:'center'
    }
}));