import type {
  BaseTypes,
  EffortValues,
  IndividualValues,
  Level,
  Natures,
  PokemonBaseData,
  PokemonSchema,
  PokemonStats,
  Url,
} from "@/types";
import { calculateCurrentStats } from "@/utils";

export class Pokemon {
  public sprite: Url;
  public types: [BaseTypes, BaseTypes] | [BaseTypes];
  public level: Level;
  public moves: unknown;
  public currentStats: PokemonStats;
  public stats: PokemonStats;
  public baseStats: PokemonSchema["baseStats"];
  public effortValues: EffortValues;
  public individualValues: IndividualValues;
  public nature: Natures;

  constructor(pokemonSchema: PokemonSchema) {
    this.sprite = pokemonSchema.data.sprite;
    this.level = pokemonSchema.level;
    this.baseStats = pokemonSchema.data.baseStats;
    this.effortValues = pokemonSchema.effortValues;
    this.individualValues = pokemonSchema.individualValues;
    this.nature = pokemonSchema.nature;
    this.types = pokemonSchema.data.types;
    this.stats = calculateCurrentStats(
      this.level,
      this.baseStats,
      this.effortValues,
      this.individualValues,
      this.nature
    );
    this.currentStats = Object.assign({}, this.stats);
  }

  get totalBaseStats() {
    return Object.values(this.baseStats).reduce((prev, curr) => prev + curr, 0);
  }
}

const SkeledirjeData: PokemonBaseData = {
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

const SkeledirjeSchema: PokemonSchema = {
  data: SkeledirjeData,
  level: 100,
  types: SkeledirjeData.types,
  baseStats: SkeledirjeData.baseStats,
  effortValues: {
    HP: 252,
    Defense: 92,
    SpecialDefense: 164,
    Attack: 0,
    SpecialAttack: 0,
    Speed: 0,
  },
  individualValues: {
    Attack: 24,
    Defense: 31,
    HP: 31,
    SpecialAttack: 31,
    SpecialDefense: 31,
    Speed: 31,
  },
  moves: [null, null, null, null],
  nature: "Bold",
  teraType: "Fairy",
};

const pokemon = new Pokemon(SkeledirjeSchema);

console.log(pokemon.totalBaseStats);
console.log(pokemon.stats);
