import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Values from "../components/Values";
import ReachOut from "../components/ReachOut";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("../components/Skills"), {
  ssr: false,
});

const useStyles = makeStyles(() => ({
  wBackground: {
    background: "white",
    width: "100%",
    maxWidth: "100%",
  },
  gBackground: {
    background: grey[200],
    width: "100%",
    maxWidth: "100%",
  },
  content: {
    maxWidth: 960,
    paddingTop: 16,
    paddingBottom: 16,
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Hero />
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
    </div>
  );
}
