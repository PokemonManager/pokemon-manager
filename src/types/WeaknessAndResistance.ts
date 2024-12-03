import type { PokemonBaseType } from "./PokemonBaseType";

export type WeaknessAndResistance = {
  weakness: Array<PokemonBaseType>;
  resistance: Array<PokemonBaseType>;
  noDamage: Array<PokemonBaseType> | [];
};
