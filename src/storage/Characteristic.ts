import type { CharacteristicDataType, Characteristics } from "@/types";

export const Characteristic: Record<Characteristics, CharacteristicDataType> = {
  "Loves to eat": {
    target: "HP",
    possibleIndividualValues: [0, 5, 10, 15, 20, 25, 30],
  },
  "Proud of its power": {
    target: "Attack",
    possibleIndividualValues: [0, 5, 10, 15, 20, 25, 30],
  },
  "Sturdy body": {
    target: "Defense",
    possibleIndividualValues: [0, 5, 10, 15, 20, 25, 30],
  },
  "Likes to run": {
    target: "Speed",
    possibleIndividualValues: [0, 5, 10, 15, 20, 25, 30],
  },
  "Highly curious": {
    target: "SpecialAttack",
    possibleIndividualValues: [0, 5, 10, 15, 20, 25, 30],
  },
  "Strong willed": {
    target: "SpecialDefense",
    possibleIndividualValues: [0, 5, 10, 15, 20, 25, 30],
  },
  "Takes plenty of siestas": {
    target: "HP",
    possibleIndividualValues: [1, 6, 11, 16, 21, 26, 31],
  },
  "Likes to thrash about": {
    target: "Attack",
    possibleIndividualValues: [1, 6, 11, 16, 21, 26, 31],
  },
  "Capable of taking hits": {
    target: "Defense",
    possibleIndividualValues: [1, 6, 11, 16, 21, 26, 31],
  },
  "Alert to sounds": {
    target: "Speed",
    possibleIndividualValues: [1, 6, 11, 16, 21, 26, 31],
  },
  Mischievous: {
    target: "SpecialAttack",
    possibleIndividualValues: [1, 6, 11, 16, 21, 26, 31],
  },
  "Somewhat vain": {
    target: "SpecialDefense",
    possibleIndividualValues: [1, 6, 11, 16, 21, 26, 31],
  },
  "Nods off a lot": {
    target: "HP",
    possibleIndividualValues: [2, 7, 12, 17, 22, 27],
  },
  "A little quick tempered": {
    target: "Attack",
    possibleIndividualValues: [2, 7, 12, 17, 22, 27],
  },
  "Highly persistent": {
    target: "Defense",
    possibleIndividualValues: [2, 7, 12, 17, 22, 27],
  },
  "Impetuous and silly": {
    target: "Speed",
    possibleIndividualValues: [2, 7, 12, 17, 22, 27],
  },
  "Thoroughly cunning": {
    target: "SpecialAttack",
    possibleIndividualValues: [2, 7, 12, 17, 22, 27],
  },
  "Strongly defiant": {
    target: "SpecialDefense",
    possibleIndividualValues: [2, 7, 12, 17, 22, 27],
  },
  "Scatters things often": {
    target: "HP",
    possibleIndividualValues: [3, 8, 13, 18, 23, 28],
  },
  "Likes to fight": {
    target: "Attack",
    possibleIndividualValues: [3, 8, 13, 18, 23, 28],
  },
  "Good endurance": {
    target: "Defense",
    possibleIndividualValues: [3, 8, 13, 18, 23, 28],
  },
  "Somewhat of a clown": {
    target: "Speed",
    possibleIndividualValues: [3, 8, 13, 18, 23, 28],
  },
  "Often lost in thought": {
    target: "SpecialAttack",
    possibleIndividualValues: [3, 8, 13, 18, 23, 28],
  },
  "Hates to lose": {
    target: "SpecialDefense",
    possibleIndividualValues: [3, 8, 13, 18, 23, 28],
  },
  "Likes to relax": {
    target: "HP",
    possibleIndividualValues: [4, 9, 14, 19, 24, 29],
  },
  "Quick tempered": {
    target: "Attack",
    possibleIndividualValues: [4, 9, 14, 19, 24, 29],
  },
  "Good perseverance": {
    target: "Defense",
    possibleIndividualValues: [4, 9, 14, 19, 24, 29],
  },
  "Quick to flee": {
    target: "Speed",
    possibleIndividualValues: [4, 9, 14, 19, 24, 29],
  },
  "Very finicky": {
    target: "SpecialAttack",
    possibleIndividualValues: [4, 9, 14, 19, 24, 29],
  },
  "Somewhat stubborn": {
    target: "SpecialDefense",
    possibleIndividualValues: [4, 9, 14, 19, 24, 29],
  },
};
