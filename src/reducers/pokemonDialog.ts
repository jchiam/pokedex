import { PokemonDetailsActionKeys, PokemonDialogActions } from 'actions';
import { DataStates } from 'constants/states';
import { App } from 'typings/state';

const initialState: App.PokemonDialog = {
  details: '',
  dataState: DataStates.Unfetched
};

export default (state: App.PokemonDialog = initialState, action: PokemonDialogActions): App.PokemonDialog => {
  switch (action.type) {
    case PokemonDetailsActionKeys.FETCHING_POKEMON_DETAILS:
      return {
        ...state,
        dataState: DataStates.Fetching
      };
    case PokemonDetailsActionKeys.RECEIVED_POKEMON_DETAILS:
      return {
        ...state,
        details: action.payload,
        dataState: DataStates.Received
      };
    case PokemonDetailsActionKeys.FETCH_POKEMON_DETAILS_ERROR:
      return {
        ...state,
        dataState: DataStates.Error
      };
    default:
      return state;
  }
};
