export interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export interface PokemonsData {
  name: string;
  url: string;
}

export interface PokemonsList {
  count: number;
  next: string;
  previous: string | undefined;
  results: PokemonsData[];
}

export interface PokemonsInfo {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": { front_default: string };
    };
  };
  types: [{ type: { name: string } }, { type: { name: string } }];
}
