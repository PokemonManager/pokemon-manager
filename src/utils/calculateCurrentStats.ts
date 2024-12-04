import type {
  BaseStats,
  EffortValues,
  IndividualValues,
  Level,
  Natures,
  PokemonStats,
} from "@/types";
import { PokemonNatures } from "@/storage";

export function calculateCurrentStats(
  level: Level,
  baseStats: BaseStats,
  effortValues: EffortValues,
  individualValues: IndividualValues,
  nature: Natures
): PokemonStats {
  const pokemonNature = PokemonNatures[nature];

  const pokemonStats: PokemonStats = {
    HP: 0,
    Attack: 0,
    Defense: 0,
    SpecialAttack: 0,
    SpecialDefense: 0,
    Speed: 0,
  };

  for (const currentStat of Object.keys(pokemonStats) as Array<
    keyof PokemonStats
  >) {
    const effortValueRounded = Math.floor(effortValues[currentStat] / 4);

    if (currentStat === "HP") {
      const rounding = Math.floor(((2 * baseStats[currentStat] + individualValues[currentStat] + effortValueRounded) * level) / 100)

      pokemonStats[currentStat] = rounding + level + 10;

      continue;
    }

    const natureEffectAtCurrentStat =
      pokemonNature.increased === currentStat
        ? 1.1
        : pokemonNature.decreased === currentStat
        ? 0.9
        : 1.0;

    const rounding = Math.floor(
      ((2 * baseStats[currentStat] +
        individualValues[currentStat] +
        effortValueRounded) *
        level) /
        100
    );

    pokemonStats[currentStat] = Math.floor(
      (rounding + 5) * natureEffectAtCurrentStat
    );
  }

  return pokemonStats;
}
