import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SongCard from './SongCard';
import { noop } from '../utils/common';

const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: `${theme.spacing.unit * 4}px`,
    marginTop: `${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  paper: {
    height: 140,
    width: '100%',
  },
});

const SongsList = ({ classes, data = [], onItemSelect }) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <div className={classes.root}>
      {data.map(item => (
        <SongCard key={item.id} item={item} onClick={onItemSelect} />
      ))}
    </div>
  );
};

SongsList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  onItemSelect: PropTypes.func,
};

SongsList.defaultProps = {
  data: [],
  onItemSelect: noop,
};

export default withStyles(styles)(SongsList);
