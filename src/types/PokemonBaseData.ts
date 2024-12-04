import type { BaseStats } from "./BaseStats";
import type { BaseTypes } from "./BaseTypes";
import type { IndividualBreedingData } from "./IndividualBreedingData";
import type { PokemonTraining } from "./PokemonTraining";
import type { Url } from "./Url";

export type PokemonBaseData = {
  name: string;
  number: number;
  sprite: Url;
  abilities: Array<unknown>; // TODO: Criar um tipo chamado Ability
  types: [BaseTypes] | [BaseTypes, BaseTypes];
  training: PokemonTraining;
  breeding: IndividualBreedingData;
  baseStats: BaseStats;
  moves: unknown;
  // TODO: Criar um tipo chamado Move e Moves(lvl up, evolution, TM, Egg Moves)
};
