import { PokemonNatures } from "@/storage";
import type { BaseStats, Natures, Range } from "@/types";

export function calculateIndividualValue(
  targetStat: keyof BaseStats,
  statValue: number,
  baseValue: number,
  effortValue: Range<253>,
  level: Range<101>,
  nature: Natures
) {
  const natureModifier =
    PokemonNatures[nature].increased === targetStat
      ? 1.1
      : PokemonNatures[nature].decreased === targetStat
      ? 0.9
      : 1.0;

  let individualValue = 0;

  if (targetStat === "HP") {
    individualValue =
      (statValue -
        (level + 10 + (baseValue * 2 + effortValue / 4) * (level / 100))) /
      (level / 100);
  } else {
    individualValue =
      (statValue - natureModifier * (baseValue * 2 + effortValue / 4)) /
        (level / 100) -
      5;
  }

  return individualValue;
}
