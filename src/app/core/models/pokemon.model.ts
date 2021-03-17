export class Pokemon {
  name?: string;
  url?: string;
}

export class Data extends Pokemon {
  count?: number;
  next?: string;
  previous?: string;
  results?: Pokemon;
}

export class PokemonInfo {
  abilities?: [];
  base_experience?: number;
  height?: number;
  id?: number;
  moves?: [];
  sprites?: [];
  stats?: [];
  types?: [];
  weight?: number;
}
