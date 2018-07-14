import React, { Component, Props } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import PokemonDialog from 'containers/PokemonDialog';
import { generateImageUrl } from 'utils';
import { DataStates } from 'constants/states';

interface PokemonListProps extends Props<PokemonList> {
  list: Array<string>;
  dataState: DataStates;
  fetchPokemonList: () => void;
}

interface PokemonListState extends Props<PokemonList> {
  dialogVisible: boolean;
  dialogId: number;
}

export default class PokemonList extends Component<PokemonListProps, PokemonListState> {
  constructor(props: PokemonListProps) {
    super(props);
    this.state = {
      dialogVisible: false,
      dialogId: 0
    };
  }

  componentDidMount() {
    this.props.fetchPokemonList();
  }

  renderDialog() {
    const { dialogVisible, dialogId } = this.state;
    if (dialogId > 0) {
      return (
        <PokemonDialog
          open={dialogVisible}
          id={dialogId}
          onClose={() => this.setState({ dialogVisible: false })}
        />
      );
    }
    return null;
  }

  renderGrid() {
    const { list, dataState } = this.props;
    if (dataState === DataStates.Fetching) {
      return <CircularProgress size={50} />;
    }
    return (
      <Grid container justify="center">
        {list.map((p, index) => (
          <Grid key={p} item>
            <Paper
              onClick={() => this.setState({ dialogVisible: true, dialogId: index + 1 })}
              style={{ width: 100, height: 100 }}
            >
              <img src={generateImageUrl(p, 'f_auto,w_100,h_100,q_auto')} alt={index.toString()} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  }

  render() {
    return (
      <div>
        {this.renderGrid()}
        {this.renderDialog()}
      </div>
    );
  }
}
