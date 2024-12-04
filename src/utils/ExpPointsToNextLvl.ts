import type { GrowthRate, Level } from "@/types";
import { TotalExpPointsByLvl } from "./TotalExpPointsByLvl";

type ExpPointsToNextLvlFunction = (level: Level) => number;

export const ExpPointsToNextLvl: Record<
  GrowthRate,
  ExpPointsToNextLvlFunction
> = {
  Erratic: (level: Level) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl.Erratic((level + 1) as Level) -
      TotalExpPointsByLvl.Erratic(level)
    );
  },
  Fast: (level: Level) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl.Fast((level + 1) as Level) -
      TotalExpPointsByLvl.Fast(level)
    );
  },
  "Medium Fast": (level: Level) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl["Medium Fast"]((level + 1) as Level) -
      TotalExpPointsByLvl["Medium Fast"](level)
    );
  },
  "Medium Slow": (level: Level) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl["Medium Slow"]((level + 1) as Level) -
      TotalExpPointsByLvl["Medium Slow"](level)
    );
  },
  Slow: (level: Level) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl.Slow((level + 1) as Level) -
      TotalExpPointsByLvl.Slow(level)
    );
  },
  Fluctuating: (level: Level) => {
    if (level >= 100) return 0;

    return (
      TotalExpPointsByLvl.Fluctuating((level + 1) as Level) -
      TotalExpPointsByLvl.Fluctuating(level)
    );
  },
};
