import type { Pokemon, Filter } from 'types/Pokemon';
import type { GetServerSideProps, NextPage } from 'next';
import { getPokemon } from 'apollo/querys';
import { Container } from 'components/Container';
import { PokeTypes } from 'components/PokeTypes';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  pokemon: Filter;
};

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
      </Head>
      <div className='grid min-h-screen place-items-center'>
        <main className='flex flex-col items-center gap-2'>
          <h1 className='text-xl font-semibold'>
            {pokemon.name.toUpperCase()}
          </h1>
          <PokeTypes {...pokemon} />
          <Container {...pokemon} />
        </main>
        <button className='absolute top-4 left-4 text-sm font-bold'>
          <Link href={'/'}>
            <a>{"I'm simp"}</a>
          </Link>
        </button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { name } = query;
  const { pokemon } = await getPokemon(name as string);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default Pokemon;
