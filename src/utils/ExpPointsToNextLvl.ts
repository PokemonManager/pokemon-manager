import type { GrowthRate } from "@/types";
import { TotalExpPointsByLvl } from "./TotalExpPointsByLvl";

type ExpPointsToNextLvlFunction = (level: number) => number;

export const ExpPointsToNextLvl: Record<
  GrowthRate,
  ExpPointsToNextLvlFunction
> = {
  Erratic: (level: number) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl.Erratic(level + 1) -
      TotalExpPointsByLvl.Erratic(level)
    );
  },
  Fast: (level: number) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl.Fast(level + 1) - TotalExpPointsByLvl.Fast(level)
    );
  },
  "Medium Fast": (level: number) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl["Medium Fast"](level + 1) -
      TotalExpPointsByLvl["Medium Fast"](level)
    );
  },
  "Medium Slow": (level: number) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl["Medium Slow"](level + 1) -
      TotalExpPointsByLvl["Medium Slow"](level)
    );
  },
  Slow: (level: number) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl.Slow(level + 1) - TotalExpPointsByLvl.Slow(level)
    );
  },
  Fluctuating: (level: number) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl.Fluctuating(level + 1) -
      TotalExpPointsByLvl.Fluctuating(level)
    );
  },
};
