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
        minHeight:'450px'
    }
}));