import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

export default class PokemonList extends Component {
  render() {
    return (
      <Grid container justify="flex-start">
        <Grid item>
          <Paper style={{ width: 200, height: 200 }}>Bulbasaur</Paper>
        </Grid>
        <Grid item>
          <Paper style={{ width: 200, height: 200 }}>Bulbasaur</Paper>
        </Grid>
        <Grid item>
          <Paper style={{ width: 200, height: 200 }}>Bulbasaur</Paper>
        </Grid>
        <Grid item>
          <Paper style={{ width: 200, height: 200 }}>Bulbasaur</Paper>
        </Grid>
        <Grid item>
          <Paper style={{ width: 200, height: 200 }}>Bulbasaur</Paper>
        </Grid>
        <Grid item>
          <Paper style={{ width: 200, height: 200 }}>Bulbasaur</Paper>
        </Grid>
        <Grid item>
          <Paper style={{ width: 200, height: 200 }}>Bulbasaur</Paper>
        </Grid>
        <Grid item>
          <Paper style={{ width: 200, height: 200 }}>Bulbasaur</Paper>
        </Grid>
      </Grid>
    );
  }
}
