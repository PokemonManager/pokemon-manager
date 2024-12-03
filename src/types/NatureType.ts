import type { BaseStats } from "./BaseStats";
import type { Flavors } from "./Flavors";

export type NatureType = {
  increased: keyof BaseStats;
  decreased: keyof BaseStats;
  favoriteFlavor: Flavors;
  dislikedFlavor: Flavors;
};
