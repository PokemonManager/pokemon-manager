import type { BaseStats } from "./BaseStats";

type EffortValueYield = { stat: keyof BaseStats; value: 1 | 2 | 3 };

export type PokemonTraining = {
  effortValueYield: Array<EffortValueYield>;
  baseFriendship: number;
  growthRate: unknown; // TODO: Adicionar isso
  baseExp: number;
};
