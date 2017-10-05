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
      <Grid container justify="flex-start">
        {list.map((p, index) => (
          <Grid key={p} item>
            <Paper style={{ width: 200, height: 200 }}>
              <img src={generateImageUrl(p, 'w_200,h_200')} alt={index} />
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
