import { connect } from 'react-redux';

import PokemonList from 'components/PokemonList';
import fetchPokemonList from 'actions/pokemonList';

function mapStateToProps(state) {
  return {
    list: state.pokemon.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonList: () => dispatch(fetchPokemonList())
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PokemonList);
