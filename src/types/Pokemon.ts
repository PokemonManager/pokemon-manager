// import type { BaseStats } from "./BaseStats";

import type { EffortValues } from "./EffortValues";
import type { IndividualValues } from "./IndividualValues";
import type { Range } from "./Range";
import type { PokemonData } from "./PokemonBaseData";

export interface Pokemon {
  data: PokemonData;
  level: Range<101>;
  types: PokemonData["types"];
  baseStats: PokemonData["baseStats"];
  effortValues: EffortValues;
  individualValues: IndividualValues;
  moves: unknown; // TODO: Ver isso
}
