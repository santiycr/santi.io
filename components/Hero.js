import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(() => ({
  heading: {
    color: "white",
    textShadow: "0 1px 2px rgba(0,0,0,.2)"
  },
  hero: {
    display: "flex",
    backgroundImage: "url(/static/images/self/self.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    maxWidth: "100%",
    height: "90vh"
  }
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container className={classes.hero}>
      <Grid container justify="flex-start" alignItems="center">
        <Grid item xs={false} sm={2} lg={3} />
        <Grid item className={classes.heading} xs={12} sm={4} lg={3}>
          <Typography variant="subtitle1">Hello! My name is</Typography>
          <Typography variant="h4" component="h1">
            Santiago Suarez Ordoñez
            <Hidden xsDown>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Hidden>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
