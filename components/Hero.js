import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  heading: {
    backgroundColor: "hsla(300, 20%, 6%, 0.4)",
    color: "white",
    borderRadius: 7
  }
}));

function Hero() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="flex-start"
      alignItems="center"
      alignContent="stretch"
      spacing={6}
    >
      <Grid item className={classes.heading} lg={6}>
        <Typography variant="h4" component="h1">
          Hello World!
          <br />
          My name is
          <br />
          Santiago Suarez Ordoñez
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Hero;
