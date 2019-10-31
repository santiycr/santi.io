import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { LinkedIn, Twitter, GitHub, Email, WhatsApp } from "@material-ui/icons";

export default function ReachOut() {
  return (
    <Container>
      <Typography variant="h5" component="h2">
        Reach Out
      </Typography>
      <Box my={2}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2} sm={1}>
            <Link href="mailto:santiycr@gmail.com">
              <Email />
              <Typography variant="srOnly">Email</Typography>
            </Link>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Link href="https://wa.me/14158572684">
              <WhatsApp />
              <Typography variant="srOnly">WhatsApp</Typography>
            </Link>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Link href="https://www.linkedin.com/in/santiycr/">
              <LinkedIn />
              <Typography variant="srOnly">Linkedin</Typography>
            </Link>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Link href="https://twitter.com/santiycr">
              <Twitter />
              <Typography variant="srOnly">Twitter</Typography>
            </Link>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Link href="https://github.com/santiycr">
              <GitHub />
              <Typography variant="srOnly">GitHub</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
