import type { BaseTypes } from "./BaseTypes";

export type WeaknessAndResistance = {
  weakness: Array<BaseTypes>;
  resistance: Array<BaseTypes>;
  noDamage: Array<BaseTypes> | [];
};
