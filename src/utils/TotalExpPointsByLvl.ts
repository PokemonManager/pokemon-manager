import type { GrowthRate } from "@/types";

type TotalExpPointsFunction = (level: number) => number;

export const TotalExpPointsByLvl: Record<GrowthRate, TotalExpPointsFunction> = {
  Erratic: (level: number) => {
    if (level < 50) {
      return Math.floor((level ** 3 * (100 - level)) / 50);
    } else if (level >= 50 && level < 68) {
      return Math.floor((level ** 3 * (150 - level)) / 100);
    } else if (level >= 68 && level < 98) {
      const rounding = Math.floor((1911 - 10 * level) / 3);
      return Math.floor((level ** 3 * rounding) / 500);
    }

    return Math.floor((level ** 3 * (160 - level)) / 100);
  },
  Fast: (level: number) => {
    return Math.floor((4 * level ** 3) / 5);
  },
  "Medium Fast": (level: number) => {
    return Math.floor(level ** 3);
  },
  "Medium Slow": (level: number) => {
    return Math.floor(
      (6 / 5) * level ** 3 - 15 * level ** 2 + 100 * level - 140
    );
  },
  Slow: (level: number) => {
    return Math.floor((5 * level ** 3) / 4);
  },
  Fluctuating: (level: number) => {
    if (level < 15) {
      const rounding = Math.floor((level + 1) / 3);

      return Math.floor((level ** 3 * (rounding + 24)) / 50);
    } else if (level >= 15 && level < 36) {
      return Math.floor((level ** 3 * (level + 14)) / 50);
    }

    const rounding = Math.floor(level / 2);

    return Math.floor((level ** 3 * (rounding + 32)) / 50);
  },
};
