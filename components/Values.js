import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Hidden from "@material-ui/core/Hidden";
import Heading from "./Heading";
import PropTypes from "prop-types";

import {
  ExpandMore,
  VerifiedUser,
  FitnessCenter,
  MenuBook,
  Autorenew,
  GroupWork,
  Favorite
} from "@material-ui/icons";

const values = [
  {
    icon: VerifiedUser,
    value: "Integrity",
    description:
      "I am my word. Follow a moral code. Respect above all. Lead by example"
  },
  {
    icon: MenuBook,
    value: "Mature Transparency",
    description:
      "Be yourself. Say what needs to be said. Have the hard conversations with emotional intelligence."
  },
  {
    icon: FitnessCenter,
    value: "Avoid comfort and grow",
    description:
      "Work hard, play hard. Enjoy the struggle. Suffer a little every day."
  },
  {
    icon: Favorite,
    value: "Enthusiasm and Joy",
    description:
      "Smile. Be grateful. Be contagious. Do what you love. Life is short."
  },
  {
    icon: Autorenew,
    value: "Performance and consistency",
    description:
      "Get it done, then do it again. Ask for forgiveness, not permission. Always be a leader."
  },
  {
    icon: GroupWork,
    value: "Community is powerful",
    description:
      "Seek real connections with real people. Stay accountable. Seek inspiration. Grow from others and help others grow."
  }
];

function Value({ value }) {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Hidden xsDown>
            <Grid item>
              <value.icon color="primary" aria-hidden="true" />
            </Grid>
          </Hidden>
          <Grid item>
            <Typography variant="h6">{value.value}</Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{value.description}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

Value.propTypes = {
  value: PropTypes.object
};

export default function Contact() {
  return (
    <Container>
      <Heading title="My Personal Values" />
      <Box my={2}>
        {values.map((value, vid) => {
          return <Value key={vid} value={value} />;
        })}
      </Box>
    </Container>
  );
}
