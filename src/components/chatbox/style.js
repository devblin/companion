// import { makeStyles } from '@material-ui/core';

export const useStyles =() => ({
    heading:{
        display:'flex',
        alignContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    messageArea:{
        display:'flex',
        height:'70vh',
        maxHeight:'800px',
        minHeight:'450px',
        overflowY:'auto',
    },
    textBox:{
        display:'flex',
        width:'100%',
        alignItems:'left',
        alignContent:'left',
        textAlign:'left',
        margin:0
    },
    inputForm:{
        display:'flex',
        width:'100%'
    },
    messageBox: {
        width: 'auto',
        height: 'auto',
        textAlign:'left',
    },
    chatBoxContainer: {
        display:'flex', 
        justifyContent:'center',
    }
});