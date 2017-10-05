import { combineReducers } from 'redux';

import pokemonReducer from 'reducers/pokemon';

export default combineReducers({
  pokemon: pokemonReducer
});
