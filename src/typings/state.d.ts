import { DataStates } from 'constants/states';

export namespace App {
  interface State {
    pokemon: Pokemon;
    pokemonDialog: PokemonDialog;
  }

  interface Pokemon {
    list: Array<string>;
    dataState: DataStates;
  }

  interface PokemonDialog {
    details: string;
    dataState: DataStates;
  }
}
