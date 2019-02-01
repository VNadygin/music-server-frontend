import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Player from '../containers/Player';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Player />
  </div>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
