import { PokemonActionKeys, PokemonActions } from 'actions';
import { DataStates } from 'constants/states';
import { App } from 'typings/state';
import { PokeAPI } from 'typings/pokemon';

const initialState: App.Pokemon = {
  list: [],
  dataState: DataStates.Unfetched
};

function extractPokemonId(publicId: string) {
  const tokens = publicId.split('/');
  return parseInt(tokens[tokens.length - 1], 10);
}

function sortByPokemonId(a: PokeAPI.Pokemon, b: PokeAPI.Pokemon) {
  const aId = extractPokemonId(a.public_id);
  const bId = extractPokemonId(b.public_id);

  if (aId < bId) {
    return -1;
  } else if (aId > bId) {
    return 1;
  }
  return 0;
}

export default (state: App.Pokemon = initialState, action: PokemonActions): App.Pokemon => {
  switch (action.type) {
    case PokemonActionKeys.FETCHING_POKEMON_LIST:
      return {
        ...state,
        dataState: DataStates.Fetching
      };
    case PokemonActionKeys.RECEIVED_POKEMON_LIST:
      return {
        ...state,
        list: action.payload.sort(sortByPokemonId).map(p => p.secure_url),
        dataState: DataStates.Received
      };
    case PokemonActionKeys.FETCH_POKEMON_LIST_ERROR:
      return {
        ...state,
        dataState: DataStates.Error
      };
    default:
      return state;
  }
};
