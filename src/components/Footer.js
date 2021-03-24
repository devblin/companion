import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1, 4),
    marginTop: "auto",
    textAlign: "center",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <Box maxWidth="sm" className={classes.footer} variant="primary">
        <Typography variant="body1">Footer Notes</Typography>
      </Box>
    </div>
  );
}
