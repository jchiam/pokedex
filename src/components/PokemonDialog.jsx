import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle, DialogContent, DialogContentText } from 'material-ui/Dialog';

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

  render() {
    const { open, id, details, onRequestClose } = this.props;
    return (
      <Dialog open={open} onRequestClose={onRequestClose}>
        <DialogTitle>{id}</DialogTitle>
        <DialogContent>
          <DialogContentText>{details}</DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

PokemonDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  details: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func,
  fetchPokemonDetails: PropTypes.func
};

PokemonDialog.defaultProps = {
  onRequestClose: () => {},
  fetchPokemonDetails: () => {}
};
