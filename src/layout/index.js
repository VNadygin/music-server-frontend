import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: 0,
  },
});

const Layout = ({ children, classes }) => (
  <div className={classes.root}>
    <Header />
    <CssBaseline />
    <Container>{children}</Container>
    <Footer />
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
