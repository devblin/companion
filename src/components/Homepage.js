import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
                    <img alt="logo" src={require("../public/logo.png")}></img>
                    <p>
                        The more we learn about mental health, the better we can
                        provide helpful support to those in our lives who
                        struggle with mental health conditions.Join with us on
                        chat bot to get help on your anxiety.
                    </p>

                    <Button href="/Chat" variant="contained" color="secondary">
                        CHAT
                    </Button>
                </Container>
            </Box>
        </React.Fragment>
    );
};
export default Homepage;
