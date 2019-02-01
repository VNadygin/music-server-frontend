import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Library } from './containers';
import Layout from './layout';

const AppRouter = () => (
  <Router>
    <Layout>
      <Route path="/" exact component={Library} />
    </Layout>
  </Router>
);

export default AppRouter;
