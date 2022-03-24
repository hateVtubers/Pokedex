import { gql } from '@apollo/client';
import { Pokemon } from 'types/Pokemon';
import { client } from 'apollo/client';

export const SEARCH_POKEMON = gql`
  query ($pokemonName: String!) {
    pokemon(name: $pokemonName) {
      id
      name
    }
  }
`;

const GET_POKEMON = gql`
  query ($pokemonName: String!) {
    pokemon(name: $pokemonName) {
      name
      sprites {
        front_default
        front_female
        front_shiny
        front_shiny_female
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      types {
        type {
          name
        }
      }
      height
      weight
      id
    }
  }
`;

export const getPokemon = async (name: string) => {
  const {
    data: { pokemon },
  } = await client.query<{ pokemon: Pokemon }>({
    query: GET_POKEMON,
    variables: {
      pokemonName: name,
    },
  });

  if (!pokemon.id) return { pokemon: null };

  const filter = {
    ...pokemon,
    types: pokemon.types.map(({ type }) => type.name),
    stats: pokemon.stats.map(({ base_stat, stat }) => ({
      base_stat,
      stat: stat.name,
    })),
    sprites: Object.values(pokemon.sprites)
      .filter((v) => v !== 'Sprite') // remove empty values from graphql
      .filter((v) => v), // remove null values
  };

  return {
    pokemon: filter,
  };
};
