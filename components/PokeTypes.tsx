export const PokeTypes = ({ types }: { types: string[] }) => {
  return (
    <ul className='flex flex-wrap items-center gap-4'>
      {types.map((type) => (
        <li
          className='rounded-lg bg-crimson-500 py-1 px-2 text-shark-500'
          key={type}
        >
          {type}
        </li>
      ))}
    </ul>
  );
};
