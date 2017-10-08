import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import PokemonDialog from 'containers/PokemonDialog';

import { generateImageUrl } from 'utils';

export default class PokemonList extends Component {
  constructor(props) {
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
          onRequestClose={() => this.setState({ dialogVisible: false })}
        />
      );
    }
    return null;
  }

  renderGrid() {
    const { list } = this.props;
    return (
      <Grid container justify="center">
        {list.map((p, index) => (
          <Grid key={p} item>
            <Paper
              onClick={() => this.setState({ dialogVisible: true, dialogId: index + 1 })}
              style={{ width: 100, height: 100 }}
            >
              <img src={generateImageUrl(p, 'f_auto,w_100,h_100,q_auto')} alt={index} />
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

PokemonList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchPokemonList: PropTypes.func.isRequired
};

PokemonList.defaultProps = {
  pokemon: []
};
