import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import * as colorsModule from "@material-ui/core/colors";
import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import Heading from "./Heading";

const useStyles = makeStyles(theme => ({
  pics: {
    height: 140,
    backgroundSize: [100, 100],
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      height: 140
    },
    [theme.breakpoints.up("md")]: {
      height: 140
    }
  }
}));

const experiences = [
  {
    image: "whyline.jpg",
    title: "Whyline",
    role: "CTO",
    labels: ["entrepreneurship", "product", "leadership"],
    description: `I was brought on as CTO to lead the engineering organization through
      a new phase of growth and grow engineering from 40 to 100 people. I'm focused on defining core
      engineering principles, roles and responsibilities, while choosing tools and processes that meet
      the team's culture and needs as we scale.`
  },
  {
    image: "blameless.png",
    title: "Blameless",
    role: "Co-Founder, CTO",
    labels: ["entrepreneurship", "product", "leadership"],
    description: `As CTO and Co-Founder, I owned the company's team and product efforts.
      I architected and wrote the core of the Blameless SRE Platform, which today powers the
      incident management and reliability practices of much of our industry. Through principles and
      key hires, I formed the company's founding engineering team and led the engineering
      organization.`
  },
  {
    image: "mulesoft.png",
    title: "Mulesoft",
    role: "Principal Engineer, Core Platform as a Service Team",
    labels: ["engineering", "enterprise", "devops"],
    description: `I was lucky enough to be at Mulesoft during the company's IPO, which taught me a lot
      about high growth transformation. Through my role as technical leader in the Core PaaS team,
      I helped define the vision for the company's centralized infrastructure efforts and hybrid
      cloud initiative.`
  },
  {
    image: "saucelabs.jpg",
    title: "Sauce Labs",
    role: "Employee #1, Director of Engineering, Core Services",
    labels: ["entrepreneurship", "leadership", "devops"],
    description: `During my 7 years at the company, I held many key roles. As we scaled, I formed and led the
    Core Services team, which oversaw Sauce's extensive cloud infratructure for our customers. I learned extensively about distributed systems, DevOps, high
    availability and reliability. Being responsible for such a key and technical team was
    challenging for my leadership skills and incredibly rewarding.`
  },
  {
    image: "selenium.jpg",
    title: "The Selenium Project",
    role: "Core Contributor",
    labels: ["open source", "public speaking", "engineering"],
    description: `I started contributing to Selenium back in 2004! I was lucky enough to become an
      important member of the community, to travel and speak at conferences, and participate in what the
      project and community have become today.`
  }
];

export default function Experience() {
  return (
    <Container>
      <Heading title="Experience" />
      {experiences.map((experience, eid) => {
        return <Job experience={experience} key={eid} />;
      })}
    </Container>
  );
}

function Job({ experience }) {
  const classes = useStyles();
  return (
    <Box my={2}>
      <Card className={classes.card}>
        <Grid container direction="row" justify="flex-start">
          <Grid item md={2} xs={12}>
            <CardMedia
              className={classes.pics}
              image={`/static/images/experience/${experience.image}`}
              title={`${experience.title} logo`}
            />
          </Grid>
          <Grid item md={10} xs={12}>
            <CardContent>
              <Box display="flex">
                <Typography component="h5" variant="h5">
                  {experience.title}
                </Typography>
                <br />
                <Box flexGrow={1} />
                <Hidden xsDown>
                  {experience.labels.map((label, lid) => {
                    return <Label label={label} key={lid} />;
                  })}
                </Hidden>
              </Box>
              <Typography variant="subtitle1" color="textSecondary">
                {experience.role}
              </Typography>
              <p>{experience.description}</p>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

Job.propTypes = {
  experience: PropTypes.object
};

function Label({ label }) {
  const theme = useTheme(),
    bgcolor = getColor(label),
    color = theme.palette.getContrastText(bgcolor);
  return (
    <Box
      component="span"
      bgcolor={bgcolor}
      color={color}
      m={0.5}
      px={0.5}
      py={0.25}
      borderRadius={8}
    >
      {label}
    </Box>
  );
}

Label.propTypes = {
  label: PropTypes.string
};

const colorAssignments = {};

let keys = [
  "red",
  "pink",
  "purple",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "lime",
  "amber",
  "green"
];
function randomColor() {
  const colorKey = keys.splice((keys.length * Math.random()) << 0, 1)[0];
  return colorsModule[colorKey];
}

function getColor(label) {
  if (label in colorAssignments) {
    return colorAssignments[label];
  } else {
    const color = randomColor();
    colorAssignments[label] = color[500];
    return color[500];
  }
}
