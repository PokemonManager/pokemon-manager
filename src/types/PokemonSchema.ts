import type { EffortValues } from "./EffortValues";
import type { IndividualValues } from "./IndividualValues";
import type { PokemonBaseData } from "./PokemonBaseData";
import type { Level } from "./Level";
import type { Natures } from "./Natures";
import type { TeraType } from "./TeraType";

export interface PokemonSchema {
  data: PokemonBaseData;
  level: Level;
  types: PokemonBaseData["types"];
  baseStats: PokemonBaseData["baseStats"];
  effortValues: EffortValues;
  individualValues: IndividualValues;
  moves: [unknown, unknown, unknown, unknown]; // TODO: Ver isso
  nature: Natures;
  teraType: TeraType;
}
