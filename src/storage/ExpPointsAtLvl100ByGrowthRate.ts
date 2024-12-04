import { type GrowthRate } from "@/types";

export const ExpPointsAtLvl100ByGrowthRate: Record<GrowthRate, number> = {
  Erratic: 600_000,
  Fast: 800_000,
  "Medium Fast": 1_000_000,
  "Medium Slow": 1_059_860,
  Slow: 1_250_000,
  Fluctuating: 1_640_000,
};
