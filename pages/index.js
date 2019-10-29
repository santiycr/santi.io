import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fade from "@material-ui/core/Fade";
import grey from "@material-ui/core/colors/grey";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Values from "../components/Values";
import ReachOut from "../components/ReachOut";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("../components/Skills"), {
  ssr: false
});

const useStyles = makeStyles(theme => ({
  transparent: {
    background: "transparent3"
  },
  root: {
    backgroundImage: "url(/static/images/self/self.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPositionY: -300,
    width: "100%",
    maxWidth: "100%",
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.down("sm")]: {
      height: 140,
      width: null
    },
    [theme.breakpoints.down("md")]: {
      height: 140,
      width: null
    }
  },
  wBackground: {
    background: "white",
    width: "100%",
    maxWidth: "100%"
  },
  gBackground: {
    background: grey[200],
    width: "100%",
    maxWidth: "100%"
  },
  content: {
    maxWidth: 960,
    paddingTop: 16,
    paddingBottom: 16
  },
  hero: {
    height: 800,
    display: "flex",
    maxWidth: 912
  }
}));

export default function Index() {
  const classes = useStyles();
  const scrolled = useScrollTrigger({ disableHysteresis: true });
  return (
    <div>
      <Container className={classes.root}>
        <CssBaseline />
        <Fade in={scrolled}>
          <AppBar className={classes.transparent}>
            <Toolbar>
              <Box flexGrow={1} />
              <Button color="inherit" href="#experience">
                Experience
              </Button>
              <Button color="inherit" href="#skills">
                Skills
              </Button>
              <Button color="inherit" href="#values">
                Values
              </Button>
              <Button color="inherit" href="#reach-out">
                Reach Out
              </Button>
            </Toolbar>
          </AppBar>
        </Fade>
        <Container className={classes.hero}>
          <Hero />
        </Container>
        <Container className={classes.gBackground}>
          <Container id="experience" className={classes.content}>
            <Experience />
          </Container>
        </Container>
        <Container className={classes.wBackground}>
          <Container id="skills" className={classes.content}>
            <Skills />
          </Container>
        </Container>
        <Container className={classes.gBackground}>
          <Container id="values" className={classes.content}>
            <Values />
          </Container>
        </Container>
        <Container className={classes.wBackground}>
          <Container id="reach-out" className={classes.content}>
            <ReachOut />
          </Container>
        </Container>
      </Container>
    </div>
  );
}
