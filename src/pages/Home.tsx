import React, { Component } from 'react';

import PokemonList from 'containers/PokemonList';

export default class Layout extends Component<any, any> {
  render() {
    return (
      <div>
        <h1>Pokémon Collection</h1>
        <PokemonList />
      </div>
    );
  }
}
