import type { BaseStats } from "./BaseStats";
import type { EffortValueType } from "./EffortValueType";

export type EffortValues = Record<keyof BaseStats, EffortValueType>;
