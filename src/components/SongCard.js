import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { noop } from '../utils/common';

const styles = theme => ({
  root: {
    cursor: 'pointer',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
});

const SongCard = ({ item, classes, onClick }) => {
  return (
    <Card className={classes.root} onClick={() => onClick(item.id)}>
      <CardMedia
        component="img"
        alt="Song Cover"
        className={classes.media}
        height="280"
        image={item.cover_image}
        title={`${item.author} - ${item.title}`}
      />
      <CardContent>
        <Typography variant="h6" component="h2" noWrap>
          {item.title}
        </Typography>
        <Typography variant="subtitle1" noWrap>
          {item.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

SongCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.shape({
    cover_image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.author,
  }),
  onClick: PropTypes.func,
};

SongCard.defaultProps = {
  data: [],
  onClick: noop,
};

export default withStyles(styles)(SongCard);
