import { useLazyQuery } from '@apollo/client';
import { FormEvent, useCallback, useState } from 'react';
import { SEARCH_POKEMON } from 'apollo/querys';

type Pokemon = {
  pokemon: { id: number; name: string };
};

export const usePokemon = () => {
  const [search] = useLazyQuery<Pokemon>(SEARCH_POKEMON);
  const [disable, setDisable] = useState<boolean>(true);
  const [userSearch, setUserSearch] = useState<string>('');
  const [content, setContent] = useState({
    content: 'Please search Pokemon',
    link: undefined as undefined | string,
  });

  const getPokemonId = useCallback(async () => {
    const { data } = await search({ variables: { pokemonName: userSearch } });
    const exist = data?.pokemon.id;

    setDisable(exist ? false : true);
    setContent({
      content: exist ? `Pokemon ID: ${exist}` : 'Pokemon not found',
      link: data?.pokemon.name as string,
    });
  }, [userSearch, search]);

  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setUserSearch(e.currentTarget.value.toLowerCase());
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContent({ ...content, content: 'Searching...' });
    getPokemonId();
  };

  return {
    disable,
    content,
    handleChange,
    handleSubmit,
  };
};
