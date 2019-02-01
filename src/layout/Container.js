import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 2}px`,
    paddingBottom: 160,
  },
});

const Container = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
);

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);
