import type { BaseStats } from "./BaseStats";
import type { IndividualValueType } from "./IndividualValueType";

export type EffortValues = Record<keyof BaseStats, IndividualValueType>;
