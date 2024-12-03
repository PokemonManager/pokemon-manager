import type { BaseStats } from "./BaseStats";

export interface InBattleStats extends BaseStats {
  Evasion: number;
  Accuracy: number;
}
