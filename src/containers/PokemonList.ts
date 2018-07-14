import { ComponentClass } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import PokemonList from 'components/PokemonList';
import { fetchPokemonList } from 'actions/pokemon';
import { App } from 'typings/state';

function mapStateToProps(state: App.State) {
  return {
    list: state.pokemon.list,
    dataState: state.pokemon.dataState
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchPokemonList: () => dispatch<any>(fetchPokemonList())
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PokemonList) as ComponentClass<any>;
