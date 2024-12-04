import { Characteristic } from "@/storage";
import type {
  BaseStats,
  BaseTypes,
  Characteristics,
  EffortValues,
  IndividualValues,
  Level,
  Natures,
  PokemonData,
  PokemonStats,
  TeraType,
  Url,
} from "@/types";
import { calculateCurrentStats } from "@/utils";

export class Pokemon {
  public data: PokemonData;
  public sprite: Url;
  public types: [BaseTypes, BaseTypes] | [BaseTypes];
  public level: Level;
  public moves: unknown;
  public currentStats: PokemonStats;
  public baseStats: BaseStats;
  public effortValues: EffortValues;
  public individualValues: IndividualValues;
  public nature: Natures;
  public teraType: TeraType;
  public characteristic?: Characteristics;

  constructor(
    targetPokemon: PokemonData,
    level: Level,
    nature: Natures,
    characteristic?: Characteristics,
    effortValues?: EffortValues,
    individualValues?: IndividualValues,
    teraType: TeraType = targetPokemon.types[0]
  ) {
    this.data = targetPokemon;
    this.sprite = targetPokemon.sprite;
    this.level = level;
    this.baseStats = targetPokemon.baseStats;
    this.nature = nature;
    this.types = targetPokemon.types;
    this.teraType = teraType;
    this.characteristic = characteristic;

    this.effortValues = effortValues ?? {
      HP: 0,
      Attack: 0,
      Defense: 0,
      SpecialAttack: 0,
      SpecialDefense: 0,
      Speed: 0,
    };

    this.individualValues = individualValues ?? {
      HP: 0,
      Attack: 0,
      Defense: 0,
      SpecialAttack: 0,
      SpecialDefense: 0,
      Speed: 0,
    };

    this.currentStats = Object.assign({}, this.stats);
  }

  get totalBaseStats() {
    return Object.values(this.baseStats).reduce((prev, curr) => prev + curr, 0);
  }

  get stats(): PokemonStats {
    return calculateCurrentStats(
      this.level,
      this.baseStats,
      this.effortValues,
      this.individualValues,
      this.nature
    );
  }

  get aboutCharacteristic() {
    return this.characteristic
      ? Characteristic[this.characteristic]
      : undefined;
  }
}

const Skeledirje: PokemonData = {
  abilities: [],
  name: "Skeledirje",
  baseStats: {
    HP: 104,
    Attack: 75,
    Defense: 100,
    SpecialAttack: 110,
    SpecialDefense: 75,
    Speed: 66,
  },
  breeding: {
    eggCycles: 20,
    eggGroups: ["Field"],
    gender: "Male",
  },
  moves: [],
  number: 911,
  sprite: "https://img.pokemondb.net/artwork/avif/skeledirge.avif",
  training: {
    effortValueYield: [{ stat: "SpecialAttack", value: 3 }],
    baseExp: 265,
    baseFriendship: 50,
    growthRate: "Medium Slow",
  },
  types: ["Fire", "Ghost"],
};

const pokemon = new Pokemon(
  Skeledirje,
  100,
  "Bold",
  "A little quick tempered",
  {
    HP: 252,
    Defense: 92,
    SpecialDefense: 164,
    Attack: 0,
    SpecialAttack: 0,
    Speed: 0,
  },
  {
    Attack: 24,
    Defense: 31,
    HP: 31,
    SpecialAttack: 31,
    SpecialDefense: 31,
    Speed: 31,
  },
  "Fairy"
);

console.log(pokemon.totalBaseStats);
console.log(pokemon.stats);
