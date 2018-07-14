import { createAction } from 'actionHelpers';
import { ActionsUnion } from 'typings';
import { PokeAPI } from 'typings/pokemon';

type PokemonArray = Array<PokeAPI.Pokemon>;

export enum PokemonActionKeys {
  FETCHING_POKEMON_LIST = 'FETCHING_POKEMON_LIST',
  RECEIVED_POKEMON_LIST = 'RECEIVED_POKEMON_LIST',
  FETCH_POKEMON_LIST_ERROR = 'FETCH_POKEMON_LIST_ERROR'
}

export enum PokemonDetailsActionKeys {
  FETCHING_POKEMON_DETAILS = 'FETCHING_POKEMON_DETAILS',
  RECEIVED_POKEMON_DETAILS = 'RECEIVED_POKEMON_DETAILS',
  FETCH_POKEMON_DETAILS_ERROR = 'FETCH_POKEMONDETAILS_ERROR'
}

export const PokemonActions = {
  fetchingPokemonList: () => createAction(PokemonActionKeys.FETCHING_POKEMON_LIST),
  receivedPokemonList: (list: PokemonArray) => createAction(PokemonActionKeys.RECEIVED_POKEMON_LIST, list),
  fetchPokemonListError: () => createAction(PokemonActionKeys.FETCH_POKEMON_LIST_ERROR)
};

export const PokemonDialogActions = {
  fetchingPokemonDetails: () => createAction(PokemonDetailsActionKeys.FETCHING_POKEMON_DETAILS),
  receivedPokemonDetails: (details: string) => createAction(PokemonDetailsActionKeys.RECEIVED_POKEMON_DETAILS, details),
  fetchPokemonDetailsError: () => createAction(PokemonDetailsActionKeys.FETCH_POKEMON_DETAILS_ERROR)
};

export type PokemonActions = ActionsUnion<typeof PokemonActions>;
export type PokemonDialogActions = ActionsUnion<typeof PokemonDialogActions>;
