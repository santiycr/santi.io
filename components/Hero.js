import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  heading: {
    backgroundColor: "hsla(300, 20%, 6%, 0.4)",
    color: "white",
    borderRadius: 7,
    padding: 16,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "inherit"
    }
  },
  hero: {
    display: "flex",
    backgroundImage: "url(/static/images/self/self.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    maxWidth: "100%",
    height: "80vh"
  }
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container className={classes.hero}>
      <Grid container justify="flex-start" alignItems="center">
        <Grid item xs={false} sm={2} lg={3} />
        <Grid item className={classes.heading} xs={12} sm={4} lg={3}>
          <Typography variant="h4" component="h1">
            Hello World!
            <br />
            My name is
            <br />
            Santiago Suarez Ordoñez
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
