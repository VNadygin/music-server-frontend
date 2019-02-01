import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import {
  libraryDataSelector,
  librarySelectSongSelector,
  playingSelector,
} from '../selectors';

import { play, pause, nextSong, prevSong } from '../actions';

const styles = theme => ({
  card: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    height: 38,
    width: 38,
  },
});

const Player = ({
  selectedSongId,
  data,
  playing,
  classes,
  play,
  pause,
  nextSong,
  prevSong,
}) => {
  if (!selectedSongId) return null;

  const selectedSong = data.byId[selectedSongId];
  const playStatus = playing ? 'PLAYING' : 'PAUSED';

  return (
    <>
      <Sound url={selectedSong.fileUrl} playStatus={playStatus} />
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {selectedSong.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {selectedSong.author}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              <SkipPreviousIcon onClick={prevSong} />
            </IconButton>
            <IconButton aria-label="Play/pause">
              {playing ? (
                <PauseIcon className={classes.icon} onClick={pause} />
              ) : (
                <PlayArrowIcon className={classes.icon} onClick={play} />
              )}
            </IconButton>
            <IconButton aria-label="Next">
              <SkipNextIcon onClick={nextSong} />
            </IconButton>
          </div>
        </div>
      </Card>
    </>
  );
};

const mapStateToProps = state => ({
  data: libraryDataSelector(state),
  selectedSongId: librarySelectSongSelector(state),
  playing: playingSelector(state),
});

const mapDispatchToProps = {
  play,
  pause,
  nextSong,
  prevSong,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Player));
