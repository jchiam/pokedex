import * as actions from 'actions/constants';
import DATA_STATES from 'constants/dataStates';

function generateEmptyState() {
  return {
    details: '',
    dataState: DATA_STATES.Unfetched
  };
}

export default function pokemonDialogReducer(state = generateEmptyState(), action) {
  switch (action.type) {
    case actions.FETCHING_POKEMON_DETAILS:
      return {
        ...state,
        dataState: DATA_STATES.Fetching
      };
    case actions.RECEIVED_POKEMON_DETAILS:
      return {
        ...state,
        details: action.payload.details,
        dataState: DATA_STATES.Received
      };
    case actions.FETCH_POKEMON_DETAILS_ERROR:
      return {
        ...state,
        dataState: DATA_STATES.Error
      };
    default:
      return state;
  }
}
