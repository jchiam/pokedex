import axios from 'axios';

import * as actions from 'actions/constants';

function receivedPokemonList(list) {
  return {
    type: actions.RECEIVED_POKEMON_LIST,
    payload: list
  };
}

export default function fetchPokemonList() {
  return (dispatch) => {
    dispatch({ type: actions.FETCHING_POKEMON_LIST });

    axios.get(process.env.GRID_THUMBNAILS)
      .then(response => response.data)
      .then(data => dispatch(receivedPokemonList(data)));
  };
}
