import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    margin: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <Fade in={checked}>
        <Box bgcolor="info.main" className={classes.main}>
          <Container>
            <br></br>
            <h1>Companion</h1>
            <Button href="/Chat" variant="contained" color="secondary">
              CHAT
            </Button>
          </Container>
        </Box>
      </Fade>
    </React.Fragment>
  );
};
export default Navbar;
