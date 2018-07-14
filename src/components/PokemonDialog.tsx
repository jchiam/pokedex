import React, { Component, Props} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';

import { DataStates } from 'constants/states';

interface PokemonDialogProps extends Props<PokemonDialog> {
  open: boolean;
  id: number;
  details: string;
  dataState: DataStates;
  onClose: () => void;
  fetchPokemonDetails: (id: number) => void;
}

export default class PokemonDialog extends Component<PokemonDialogProps, any> {
  componentDidMount() {
    const { id, fetchPokemonDetails } = this.props;
    fetchPokemonDetails(id);
  }

  componentDidUpdate(prevProps: PokemonDialogProps) {
    const { open, id, fetchPokemonDetails } = this.props;
    if (open && id !== prevProps.id) {
      fetchPokemonDetails(id);
    }
  }

  renderContents() {
    const { details, dataState } = this.props;
    if (dataState === DataStates.Fetching) {
      return <CircularProgress size={50} />;
    }
    return (
      <DialogContent>
        <DialogContentText>{details}</DialogContentText>
      </DialogContent>
    );
  }

  render() {
    const { open, id, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{id}</DialogTitle>
        {this.renderContents()}
      </Dialog>
    );
  }
}
