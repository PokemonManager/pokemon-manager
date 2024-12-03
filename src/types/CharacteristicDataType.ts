import type { BaseStats } from "./BaseStats";
import type { IndividualValueType } from "./IndividualValueType";

export interface CharacteristicDataType {
  target: keyof BaseStats;
  possibleIndividualValues: Array<IndividualValueType>;
}
