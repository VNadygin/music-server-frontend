import defaultTo from 'lodash.defaultto';

const config = {
  backendUrl: defaultTo(
    process.env.REACT_APP_BACKEND_URL,
    'http://localhost:3005'
  ),
};

export default config;
