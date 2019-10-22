import Component from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import scrollToComponent from "react-scroll-to-component";

export default function Header(refs) {
  const classes = useStyles();
  return (
    <Container>
      <AppBar className={classes.transparent}>
        <Toolbar>
          <Box flexGrow={1} />
          <Button color="inherit" onClick={() => console.log(refs)}>
            Me
          </Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Values</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">>Reach Out</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Container>
  );
}
