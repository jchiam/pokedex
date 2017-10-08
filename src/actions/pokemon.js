import axios from 'axios';
import cachios from 'cachios';

import * as actions from 'actions/constants';

function receivedPokemonList(list) {
  return {
    type: actions.RECEIVED_POKEMON_LIST,
    payload: list
  };
}

export function fetchPokemonList() {
  return (dispatch) => {
    dispatch({ type: actions.FETCHING_POKEMON_LIST });

    axios.get(process.env.GRID_THUMBNAILS)
      .then(response => response.data)
      .then(data => dispatch(receivedPokemonList(data)));
  };
}

function receivedPokemonDetails(details) {
  return {
    type: actions.RECEIVED_POKEMON_DETAILS,
    payload: { details }
  };
}

export function fetchPokemonDetails(id) {
  return (dispatch) => {
    dispatch({ type: actions.FETCHING_POKEMON_DETAILS });

    cachios.get(process.env.POKEMON_BY_ID, { params: { id } })
      .then(response => response.data)
      .then(data => dispatch(receivedPokemonDetails(JSON.stringify(data))))
      .catch(() => dispatch({ type: actions.FETCH_POKEMON_DETAILS_ERROR }));
  };
}
