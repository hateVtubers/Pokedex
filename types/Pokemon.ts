export type Pokemon = {
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  height: number;
  weight: number;
  id: number;
};

export type Filter = {
  types: string[];
  stats: {
    base_stat: number;
    stat: string;
  }[];
  name: string;
  sprites: {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  height: number;
  weight: number;
  id: number;
};
