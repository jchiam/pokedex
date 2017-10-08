import { connect } from 'react-redux';

import PokemonList from 'components/PokemonList';
import { fetchPokemonList } from 'actions/pokemon';

function mapStateToProps(state) {
  return {
    list: state.pokemon.list,
    dataState: state.pokemon.dataState
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
