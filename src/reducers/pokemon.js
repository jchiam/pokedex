import * as actions from 'actions/constants';
import DATA_STATES from 'constants/dataStates';

function generateEmptyState() {
  return {
    list: [],
    dataState: DATA_STATES.Unfetched
  };
}

function extractPokemonId(publicId) {
  const tokens = publicId.split('/');
  return parseInt(tokens[tokens.length - 1], 10);
}

function sortByPokemonId(a, b) {
  const aId = extractPokemonId(a.public_id);
  const bId = extractPokemonId(b.public_id);

  if (aId < bId) {
    return -1;
  } else if (aId > bId) {
    return 1;
  }
  return 0;
}

export default function pokemonReducer(state = generateEmptyState(), action) {
  switch (action.type) {
    case actions.FETCHING_POKEMON_LIST:
      return {
        ...state,
        dataState: DATA_STATES.Fetching
      };
    case actions.RECEIVED_POKEMON_LIST:
      return {
        ...state,
        list: action.payload.sort(sortByPokemonId).map(p => p.secure_url),
        dataState: DATA_STATES.Received
      };
    case actions.FETCH_POKEMON_LIST_ERROR:
      return {
        ...state,
        dataState: DATA_STATES.Error
      };
    default:
      return state;
  }
}
