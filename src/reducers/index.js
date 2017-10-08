import { combineReducers } from 'redux';

import pokemonReducer from 'reducers/pokemon';
import pokemonDialogReducer from 'reducers/pokemonDialog';

export default combineReducers({
  pokemon: pokemonReducer,
  pokemonDialog: pokemonDialogReducer
});
