import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { SongsList } from '../components';
import { fetchLibrary, selectSong } from '../actions';
import { libraryDataLoadingSelector, libraryDataSelector } from '../selectors';

const styles = theme => ({});

class Library extends Component {
  componentDidMount() {
    const { fetchLibrary } = this.props;
    fetchLibrary();
  }

  render() {
    const { data, loading, selectSong } = this.props;

    if (loading) {
      return 'loading...';
    }

    const dataSource = data.allIds.map(id => data.byId[id]);

    return (
      <div>
        <SongsList data={dataSource} onItemSelect={selectSong} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: libraryDataSelector(state),
  loading: libraryDataLoadingSelector(state),
});

const mapDispatchToProps = {
  fetchLibrary,
  selectSong,
};

Library.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  data: PropTypes.object,
};

Library.defaultProps = {
  loading: true,
  data: {
    byId: {},
    allIds: [],
  },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Library));
