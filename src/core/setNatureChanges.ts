import type { BaseStats, Natures } from "@/types";
import { PokemonNatures } from "@/storage";

export function setNatureChanges(stats: BaseStats, nature: Natures): BaseStats {
  const pokemonNature = PokemonNatures[nature];

  const newStats: BaseStats = Object.assign({}, stats);

  if (pokemonNature.increased === pokemonNature.decreased) return newStats;

  newStats[pokemonNature.increased] *= 1.1;
  newStats[pokemonNature.increased] = Math.floor(
    newStats[pokemonNature.increased]
  );

  newStats[pokemonNature.decreased] *= 0.9;
  newStats[pokemonNature.decreased] = Math.floor(
    newStats[pokemonNature.decreased]
  );

  return newStats;
}
