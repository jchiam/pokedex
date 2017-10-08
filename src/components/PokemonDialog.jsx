import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';
import { CircularProgress } from 'material-ui/Progress';

import DATA_STATES from 'constants/dataStates';

export default class PokemonDialog extends Component {
  componentDidMount() {
    const { id, fetchPokemonDetails } = this.props;
    fetchPokemonDetails(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      nextProps.fetchPokemonDetails(nextProps.id);
    }
  }

  renderContents() {
    const { details, dataState } = this.props;
    if (dataState === DATA_STATES.Fetching) {
      return <CircularProgress size={50} />;
    }
    return (
      <DialogContent>
        <DialogContentText>{details}</DialogContentText>
      </DialogContent>
    );
  }

  render() {
    const { open, id, onRequestClose } = this.props;
    return (
      <Dialog open={open} onRequestClose={onRequestClose}>
        <DialogTitle>{id}</DialogTitle>
        {this.renderContents()}
      </Dialog>
    );
  }
}

PokemonDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  details: PropTypes.string.isRequired,
  dataState: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func,
  fetchPokemonDetails: PropTypes.func
};

PokemonDialog.defaultProps = {
  onRequestClose: () => {},
  fetchPokemonDetails: () => {}
};
