import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  icon: {
    marginRight: 16
  }
}));

export default function Heading({ title }) {
  const classes = useStyles();
  return (
    <Box mb={4} mt={3}>
      <Typography variant="h4" component="h2">
        <DoubleArrowRoundedIcon className={classes.icon} />
        {title}
      </Typography>
    </Box>
  );
}

Heading.propTypes = {
  title: PropTypes.string
};
