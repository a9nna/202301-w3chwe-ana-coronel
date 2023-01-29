export interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export interface ButtonStructure {
  anchorElement: HTMLAnchorElement;
  render: () => void;
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
  abilities: [
    {
      ability: {
        name: string;
      };
    },
    {
      ability: {
        name: string;
      };
    }
  ];
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": { front_default: string };
    };
  };
  stats: [
    {
      stat: {
        name: string;
      };
    },
    {
      stat: {
        name: string;
      };
    },
    {
      stat: {
        name: string;
      };
    },
    {
      stat: {
        name: string;
      };
    },
    {
      stat: {
        name: string;
      };
    },
    {
      stat: {
        name: string;
      };
    }
  ];
  types: [{ type: { name: string } }, { type: { name: string } }];
}
