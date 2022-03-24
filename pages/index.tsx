import type { NextPage } from 'next';
import { usePokemon } from 'hooks/usePokemon';
import { Button } from 'components/Button';
import Head from 'next/head';

const Home: NextPage = () => {
  const { disable, content, handleChange, handleSubmit } = usePokemon();

  return (
    <>
      <Head>
        <title>Search your pokemon</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
      </Head>
      <div className='flex min-h-screen flex-col items-center justify-center gap-2'>
        <form
          className='flex flex-col items-center gap-3'
          onSubmitCapture={handleSubmit}
        >
          <h1 className='text-xl font-semibold'>Search Pokemon:</h1>
          <input
            type='text'
            onChange={handleChange}
            className='w-60 rounded-md bg-crimson-500 py-1 px-3 text-shark-600 outline-none'
          />
        </form>
        <Button {...{ disable, ...content }} />
      </div>
    </>
  );
};

export default Home;
