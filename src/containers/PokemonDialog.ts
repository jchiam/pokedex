import { ComponentClass } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import PokemonDialog from 'components/PokemonDialog';
import { fetchPokemonDetails } from 'actions/pokemon';
import { App } from 'typings/state';

function mapStateToProps(state: App.State) {
  return {
    details: state.pokemonDialog.details,
    dataState: state.pokemonDialog.dataState
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchPokemonDetails: (id: number) => dispatch<any>(fetchPokemonDetails(id))
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PokemonDialog) as ComponentClass<any>;
