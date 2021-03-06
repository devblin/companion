import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ChatIcon from '@material-ui/icons/Chat';
const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
}));

const Homepage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box bgcolor="info.main" className={classes.main}>
        <Container>
          <br></br>
          <h1>Companion</h1>
          <Button href="/Chat" variant="contained" >
            <ChatIcon fontSize="large" color="secondary" /> Talk to companion
          </Button>
        </Container>
      </Box>
    </React.Fragment>
  );
};
export default Homepage;
