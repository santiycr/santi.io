import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { LinkedIn, Twitter, GitHub, Email, WhatsApp } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

export default function ReachOut() {
  const [values, setValues] = React.useState({
    name: "",
    message: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container>
      <Typography variant="h5" component="h2">
        Reach Out
      </Typography>
      <form autoComplete="off">
        <TextField
          required
          id="name"
          label="Name"
          autoComplete="name"
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="message"
          label="Message"
          multiline
          rowsMax="8"
          value={values.multiline}
          onChange={handleChange("message")}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={1}>
          <Link href="mailto:santiycr@gmail.com">
            <Email />
            <Typography variant="srOnly">Email</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://wa.me/14158572684">
            <WhatsApp />
            <Typography variant="srOnly">WhatsApp</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://www.linkedin.com/in/santiycr/">
            <LinkedIn />
            <Typography variant="srOnly">Linkedin</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://twitter.com/santiycr">
            <Twitter />
            <Typography variant="srOnly">Twitter</Typography>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://github.com/santiycr">
            <GitHub />
            <Typography variant="srOnly">GitHub</Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
