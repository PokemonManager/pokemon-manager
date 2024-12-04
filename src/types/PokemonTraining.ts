import type { BaseStats } from "./BaseStats";
import type { GrowthRate } from "./GrowthRate";

type EffortValueYield = { stat: keyof BaseStats; value: 1 | 2 | 3 };

export type PokemonTraining = {
  effortValueYield: Array<EffortValueYield>;
  baseFriendship: number;
  growthRate: GrowthRate;
  baseExp: number;
};
