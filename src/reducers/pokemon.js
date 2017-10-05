import * as actions from 'actions/constants';

function generateEmptyState() {
  return {
    list: []
  };
}

export default function pokemonReducer(state = generateEmptyState(), action) {
  switch (action.type) {
    case actions.FETCHING_POKEMON_LIST:
      return {
        ...state,
      };
    case actions.RECEIVED_POKEMON_LIST:
      return {
        ...state,
        list: action.payload.map(p => p.secure_url)
      };
    case actions.FETCH_POKEMON_LIST_ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
}
