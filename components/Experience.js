import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import * as colorsModule from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  pics: {
    height: 140,
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      height: 140
    },
    [theme.breakpoints.up("md")]: {
      height: 140
    }
  }
}));

function randomColor() {
  const keys = Object.keys(colorsModule);
  let color = {};
  while (!color[50]) {
    color = colorsModule[keys[(keys.length * Math.random()) << 0]];
  }
  return color;
}

export default function Experience() {
  const classes = useStyles();

  const experiences = [
    {
      image: "selenium.png",
      title: "The Selenium Project",
      role: "Core Contributor",
      labels: ["open source", "public speaking", "engineering"],
      description: `Started contributing to Selenium back in 2004! I was lucky enough to become an
      important member of the community, travel, speak in conferences and participate on what the
      project and community have become today.`
    },
    {
      image: "saucelabs.jpg",
      title: "Sauce Labs",
      role: "Director of Engineering, Core Services",
      labels: ["entrepreneurship", "leadership", "devops"],
      description: `Joined as first employee back in 2008 and got to hold many roles in the company
      for over 7 years. Ultimately building and running the Core Services team, I learned
      extensively about distributed systems, complex operations, high availability and realiabily,
      as well as a strong balance of leadership and team building.`
    },
    {
      image: "mulesoft.png",
      title: "Mulesoft",
      role: "Principal Engineer, Core Platform as a Service Team",
      labels: ["engineering", "enterprise", "devops"],
      description: `I was lucky enough to be at Mulesoft for some of its most exciting growth
      phases. Being present during their IPO taught me a lot about such a transformation.  Through
      my role as technical leader for the Core PaaS team, I helped define the vision for the
      company's centralized infrastructure efforts and hybrid cloud initiative. I also had a key
      role leading the team and through an acquisition, dramatically growing that team into over ten
      people in less than 3 months.`
    },
    {
      image: "blameless.png",
      title: "Blameless",
      role: "Co-Founder, CTO",
      labels: ["entrepreneurship", "product", "leadership"],
      description: `Blameless was a whirlwind for me. After helping shape the idea of an SRE
      platform, we immediately made it into Y Combinator (the prestigious accelerator). Before YC
      even started, we were lucky enough to raise a strong Seed round from top-tier investors and
      decided to go off to the races. In only a year, I architected and wrote the product that today
      powers the incident management and reliability practices of some of the top enterprise
      companies in our industry.  As I formed our founding engineering team, I turned on leadership
      and they swiftly took over development. They have performed at the top of our industry since.
      Unexpectedly, I left Blameless as the company raised its Series A due to differences of style
      with my co-founders.  I treasure Blameless as an incredibly educating experience.`
    },
    {
      image: "whyline.jpg",
      title: "Whyline",
      role: "CTO",
      labels: ["entrepreneurship", "product", "leadership"],
      description: `I joined Whyline with the task of powering the product and engineering
      organization through its phase of fastest growth. To take the engineering team from 40 to 100,
      I'm helping define engineering principles, roles and processes for scale that meet the team's
      culture and skills.`
    }
  ];

  const colorAssignments = {};

  function getColor(label) {
    if (label in colorAssignments) {
      return colorAssignments[label];
    } else {
      const color = randomColor();
      colorAssignments[label] = color[500];
      return color;
    }
  }

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Experience
      </Typography>
      {experiences.map((experience, eid) => {
        return (
          <Box my={2} key={eid}>
            <Card className={classes.card}>
              <Grid container direction="row" justify="flex-start">
                <Grid item xs={2}>
                  <CardMedia
                    className={classes.pics}
                    image={`/static/images/experience/${experience.image}`}
                    title={`${experience.title} logo`}
                  />
                </Grid>
                <Grid item xs={10}>
                  <CardContent>
                    <Box display="flex">
                      <Typography component="h5" variant="h5">
                        {experience.title}
                      </Typography>
                      <Box flexGrow={1} />
                      {experience.labels.map((label, lid) => {
                        return (
                          <Box
                            component="span"
                            key={lid}
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
                      })}
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
      })}
    </Container>
  );
}
