import type { WeaknessAndResistance, BaseTypes } from "@/types";

export const WeaknessAndResistanceTypes: Record<
  BaseTypes,
  WeaknessAndResistance
> = {
  Bug: {
    weakness: ["Flying", "Rock", "Fire"],
    resistance: ["Fighting", "Ground", "Grass"],
    noDamage: [],
  },
  Dark: {
    weakness: ["Fighting", "Bug", "Fairy"],
    resistance: ["Ghost", "Dark"],
    noDamage: ["Psychic"],
  },
  Dragon: {
    weakness: ["Ice", "Dragon", "Fairy"],
    resistance: ["Fire", "Water", "Grass", "Electric"],
    noDamage: [],
  },
  Electric: {
    weakness: ["Ground"],
    resistance: ["Flying", "Steel", "Electric"],
    noDamage: [],
  },
  Fairy: {
    weakness: ["Poison", "Steel"],
    resistance: ["Fighting", "Bug", "Dark"],
    noDamage: ["Dragon"],
  },
  Fighting: {
    weakness: ["Flying", "Psychic", "Fairy"],
    resistance: ["Rock", "Bug", "Dark"],
    noDamage: [],
  },
  Fire: {
    weakness: ["Water", "Rock", "Ground"],
    resistance: ["Bug", "Steel", "Fire", "Grass", "Ice", "Fairy"],
    noDamage: [],
  },
  Flying: {
    weakness: ["Electric", "Ice", "Rock"],
    resistance: ["Fighting", "Bug", "Grass"],
    noDamage: ["Ground"],
  },
  Ghost: {
    weakness: ["Ghost", "Dark"],
    resistance: ["Poison", "Bug"],
    noDamage: ["Normal", "Fighting"],
  },
  Grass: {
    weakness: ["Flying", "Poison", "Bug", "Fire", "Ice"],
    resistance: ["Ground", "Water", "Grass", "Electric"],
    noDamage: [],
  },
  Ground: {
    weakness: ["Water", "Grass", "Ice"],
    resistance: ["Poison", "Rock"],
    noDamage: ["Electric"],
  },
  Ice: {
    weakness: ["Fire", "Fighting", "Rock", "Steel"],
    resistance: ["Ice"],
    noDamage: [],
  },
  Normal: {
    weakness: ["Fighting"],
    resistance: [],
    noDamage: ["Ghost"],
  },
  Poison: {
    weakness: ["Ground", "Psychic"],
    resistance: ["Fighting", "Poison", "Bug", "Grass", "Fairy"],
    noDamage: [],
  },
  Psychic: {
    weakness: ["Bug", "Ghost", "Dark"],
    resistance: ["Fighting", "Psychic"],
    noDamage: [],
  },
  Rock: {
    weakness: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    resistance: ["Normal", "Flying", "Poison", "Fire"],
    noDamage: [],
  },
  Steel: {
    weakness: ["Fire", "Fighting", "Ground"],
    resistance: [
      "Normal",
      "Flying",
      "Rock",
      "Bug",
      "Steel",
      "Grass",
      "Psychic",
      "Ice",
      "Dragon",
      "Fairy",
    ],
    noDamage: ["Poison"],
  },
  Water: {
    weakness: ["Electric", "Grass"],
    resistance: ["Steel", "Fire", "Water", "Ice"],
    noDamage: [],
  },
};
