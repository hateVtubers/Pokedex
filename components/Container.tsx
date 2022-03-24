import Image from 'next/image';

type Props = {
  stats: { base_stat: number; stat: string }[];
  sprites: {
    [key: string]: string;
  };
  name: string;
  height: number;
  weight: number;
};

export const Container = ({ sprites, stats, name, height, weight }: Props) => {
  return (
    <>
      <h2 className='text-lg font-medium'>Pokemon stats:</h2>
      <div className='grid grid-cols-2 place-items-center'>
        <ul>
          {stats.map(({ base_stat, stat }) => (
            <li key={stat}>
              <p>
                {stat}: {base_stat}
              </p>
            </li>
          ))}
        </ul>
        <ul>
          {Object.values(sprites).map((url, i) => (
            <li key={i}>
              <Image src={url} alt={name} width={45} height={45} />
            </li>
          ))}
        </ul>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
      </div>
    </>
  );
};
