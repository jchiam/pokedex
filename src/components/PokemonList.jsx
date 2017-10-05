import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import { generateImageUrl } from 'utils';

export default class PokemonList extends Component {
  componentDidMount() {
    this.props.fetchPokemonList();
  }

  renderGrid() {
    const { list } = this.props;
    return (
      <Grid container justify="center">
        {list.map((p, index) => (
          <Grid key={p} item>
            <Paper style={{ width: 100, height: 100 }}>
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
