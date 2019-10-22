import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

function Hero() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Box p={1}>
        <Grid item xs={4} />
        <Grid item xs={8}>
          <Typography variant="h5" component="h1" gutterBottom>
            ~~ Hi ~~
            <br />
            I&apos;m Santiago Suarez Ordoñez
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Hero;
