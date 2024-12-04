// import { PokemonNatures } from "@/storage";
// import type {
//   BaseStats,
//   EffortValues,
//   IndividualValues,
//   IndividualValueType,
//   Level,
//   Natures,
//   PokemonData,
//   PokemonStats,
// } from "@/types";

// export function calculateIndividualValues(
//   level: Level,
//   totalStats: PokemonStats,
//   baseStats: BaseStats,
//   effortValues: EffortValues,
//   nature: Natures
// ): IndividualValues {
//   const pokemonNature = PokemonNatures[nature];

//   const pokemonIndividualValues: IndividualValues = {
//     HP: 0,
//     Attack: 0,
//     Defense: 0,
//     SpecialAttack: 0,
//     SpecialDefense: 0,
//     Speed: 0,
//   };

//   for (const currentStat of Object.keys(pokemonIndividualValues) as Array<
//     keyof PokemonStats
//   >) {
//     const natureEffectAtCurrentStat =
//       pokemonNature.increased === currentStat
//         ? 1.1
//         : pokemonNature.decreased === currentStat
//         ? 0.9
//         : 1.0;

//     if (currentStat === "HP") {
//       pokemonIndividualValues[currentStat] = (100 *
//         ((totalStats[currentStat] - level - 10) / level) -
//         2 * baseStats[currentStat] -
//         Math.floor(effortValues[currentStat] / 4)) as IndividualValueType;

//       if (pokemonIndividualValues[currentStat] < 0) {
//         pokemonIndividualValues[currentStat] = 0;
//       }

//       continue;
//     }

//     pokemonIndividualValues[currentStat] = Math.ceil(
//       (100 * (totalStats[currentStat] / natureEffectAtCurrentStat - 5)) /
//         level -
//         2 * baseStats[currentStat] -
//         Math.floor(effortValues[currentStat] / 4)
//     ) as IndividualValueType;

//     if (pokemonIndividualValues[currentStat] < 0) {
//       pokemonIndividualValues[currentStat] = 0;
//     }
//   }

//   return pokemonIndividualValues;
// }

// const SkeledirjeData: PokemonData = {
//   abilities: [],
//   name: "Skeledirje",
//   baseStats: {
//     HP: 104,
//     Attack: 75,
//     Defense: 100,
//     SpecialAttack: 110,
//     SpecialDefense: 75,
//     Speed: 66,
//   },
//   breeding: {
//     eggCycles: 20,
//     eggGroups: ["Field"],
//     gender: "Male",
//   },
//   moves: [],
//   number: 911,
//   sprite: "https://img.pokemondb.net/artwork/avif/skeledirge.avif",
//   training: {
//     effortValueYield: [{ stat: "SpecialAttack", value: 3 }],
//     baseExp: 265,
//     baseFriendship: 50,
//     growthRate: "Medium Slow",
//   },
//   types: ["Fire", "Ghost"],
// };

// // const SkeledirjeSchema: PokemonSchema = {
// //   data: SkeledirjeData,
// //   level: 100,
// //   types: SkeledirjeData.types,
// //   baseStats: SkeledirjeData.baseStats,
// //   effortValues: {
// //     HP: 252,
// //     Defense: 92,
// //     SpecialDefense: 164,
// //     Attack: 0,
// //     SpecialAttack: 0,
// //     Speed: 0,
// //   },
// //   individualValues: {
// //     Attack: 24,
// //     Defense: 31,
// //     HP: 31,
// //     SpecialAttack: 31,
// //     SpecialDefense: 31,
// //     Speed: 31,
// //   },
// //   moves: [null, null, null, null],
// //   nature: "Bold",
// //   teraType: "Fairy",
// // };

// console.log(
//   calculateIndividualValues(
//     100,
//     {
//       HP: 412,
//       Attack: 161,
//       Defense: 284,
//       SpecialAttack: 256,
//       SpecialDefense: 227,
//       Speed: 168,
//     },
//     SkeledirjeData.baseStats,
//     SkeledirjeSchema.effortValues,
//     SkeledirjeSchema.nature
//   )
// );

// const ArmarougeData: PokemonData = {
//   number: 936,
//   abilities: [null],
//   baseStats: {
//     HP: 85,
//     Attack: 60,
//     Defense: 100,
//     SpecialAttack: 125,
//     SpecialDefense: 80,
//     Speed: 75,
//   },
//   breeding: {
//     eggCycles: 35,
//     eggGroups: ["Human Like"],
//     gender: "Male",
//   },
//   moves: [],
//   name: "Armarouge",
//   sprite: "https://img.pokemondb.net/artwork/avif/armarouge.avif",
//   training: {
//     baseExp: 263,
//     baseFriendship: 20,
//     growthRate: "Slow",
//     effortValueYield: [{ stat: "SpecialAttack", value: 2 }],
//   },
//   types: ["Fire", "Psychic"],
// };

// // const ArmarougeSchema: PokemonSchema = {
// //   data: ArmarougeData,
// //   baseStats: ArmarougeData.baseStats,
// //   effortValues: {
// //     Attack: 0,
// //     Defense: 0,
// //     HP: 0,
// //     SpecialAttack: 0,
// //     SpecialDefense: 0,
// //     Speed: 0,
// //   },
// //   individualValues: {
// //     Attack: 0,
// //     Defense: 0,
// //     HP: 0,
// //     SpecialAttack: 0,
// //     SpecialDefense: 0,
// //     Speed: 0,
// //   },
// //   level: 75,
// //   moves: [null, null, null, null],
// //   nature: "Docile",
// //   teraType: "Poison",
// //   types: ArmarougeData.types,
// // };

// console.log(
//   calculateIndividualValues(
//     75,
//     {
//       HP: 235,
//       Attack: 97,
//       Defense: 178,
//       SpecialAttack: 215,
//       SpecialDefense: 136,
//       Speed: 140,
//     },
//     ArmarougeSchema.baseStats,
//     ArmarougeSchema.effortValues,
//     ArmarougeSchema.nature
//   )
// );
