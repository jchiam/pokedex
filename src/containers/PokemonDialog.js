import { connect } from 'react-redux';

import PokemonDialog from 'components/PokemonDialog';
import { fetchPokemonDetails } from 'actions/pokemon';

function mapStateToProps(state) {
  return {
    details: state.pokemonDialog.details,
    dataState: state.pokemonDialog.dataState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemonDetails: id => dispatch(fetchPokemonDetails(id))
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PokemonDialog);
