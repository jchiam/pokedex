import { Dispatch } from 'redux';
import axios, { AxiosError } from 'axios';

import { PokemonActions, PokemonDialogActions } from 'actions';

type PokemonDispatch = Dispatch<PokemonActions>;
type PokemonDialogDispatch = Dispatch<PokemonDialogActions>;

export function fetchPokemonList(): (dispatch: PokemonDispatch) => void {
  return (dispatch: PokemonDispatch) => {
    dispatch(PokemonActions.fetchingPokemonList());

    axios.get(process.env.GRID_THUMBNAILS!)
      .then(response => response.data)
      .then(data => dispatch(PokemonActions.receivedPokemonList(data || [])))
      .catch(() => dispatch(PokemonActions.fetchPokemonListError()));
  };
}

export function fetchPokemonDetails(id: number): (dispatch: PokemonDialogDispatch) => void {
  return (dispatch: PokemonDialogDispatch) => {
    dispatch(PokemonDialogActions.fetchingPokemonDetails());

    axios.get(process.env.POKEMON_BY_ID!, { params: { id } })
      .then(response => response.data)
      .then(data => dispatch(PokemonDialogActions.receivedPokemonDetails(JSON.stringify(data))))
      .catch(() => dispatch(PokemonDialogActions.fetchPokemonDetailsError()));
  };
}
