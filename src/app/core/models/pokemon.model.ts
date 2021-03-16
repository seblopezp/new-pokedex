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
