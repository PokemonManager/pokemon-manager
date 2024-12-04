import type { EggGroups } from "./EggGroups";
import type { PokemonGender } from "./PokemonGender";

export type IndividualBreedingData = {
  eggGroups: Array<EggGroups>;
  gender: PokemonGender;
  eggCycles: number;
};
