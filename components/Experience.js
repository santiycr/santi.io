import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import * as colorsModule from "@material-ui/core/colors";
import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";

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
    description: `As the new CTO, my task is that of leading the engineering organization through
      a new phase of growth. To take the engineering team from 40 to 100, I'm helping define core
      engineering principles, roles and responsibilities, tools and processes for scale that meet
      the team's culture and needs.`
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
    description: `I was lucky enough to be at Mulesoft the company's IPO, which taught me a lot
      about such a transformation.  Through a role of technical leader in the Core PaaS team,
      I helped define the vision for the company's centralized infrastructure efforts and hybrid
      cloud initiative.`
  },
  {
    image: "saucelabs.jpg",
    title: "Sauce Labs",
    role: "Director of Engineering, Core Services",
    labels: ["entrepreneurship", "leadership", "devops"],
    description: `Being first employee I held many key roles in the company for over 7 years. By
      forming and leading the Core Services team for many years, I learned extensively about
      distributed systems, DevOps, high availability and reliability. Being responsible for such
      a key and technical team was challenging for my leadership skills and incredibly rewarding.`
  },
  {
    image: "selenium.jpg",
    title: "The Selenium Project",
    role: "Core Contributor",
    labels: ["open source", "public speaking", "engineering"],
    description: `Started contributing to Selenium back in 2004! I was lucky enough to become an
      important member of the community, travel, speak in conferences and participate on what the
      project and community have become today.`
  }
];

export default function Experience() {
  return (
    <Container>
      <Typography variant="h5" component="h2">
        Experience
      </Typography>
      {experiences.map((experience, eid) => {
        return <Job experience={experience} key={eid} />;
      })}
    </Container>
  );
}

function Job({ experience, key }) {
  const classes = useStyles();
  return (
    <Box my={2} key={key}>
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
  experience: PropTypes.object,
  key: PropTypes.number
};

function Label({ label, key }) {
  return (
    <Box
      component="span"
      key={key}
      bgcolor={getColor(label)}
      color="white"
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
  label: PropTypes.string,
  key: PropTypes.number
};

const colorAssignments = {};

function randomColor() {
  const keys = Object.keys(colorsModule);
  let color = {};
  while (!color[50]) {
    color = colorsModule[keys[(keys.length * Math.random()) << 0]];
  }
  return color;
}

function getColor(label) {
  if (label in colorAssignments) {
    return colorAssignments[label];
  } else {
    const color = randomColor();
    colorAssignments[label] = color[500];
    return color;
  }
}
