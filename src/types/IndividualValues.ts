import type { BaseStats } from "./BaseStats";
import type { IndividualValueType } from "./IndividualValueType";

export type IndividualValues = Record<keyof BaseStats, IndividualValueType>;
