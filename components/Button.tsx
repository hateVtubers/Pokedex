import Link from 'next/link';

type Props = {
  disable: boolean;
  content: string;
  link?: string;
};

export const Button = ({ disable, content, link }: Props) => {
  return (
    <button
      className={`rounded-lg bg-crimson-500 py-1.5 px-2 text-shark-600 ${
        disable ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      disabled={disable}
    >
      {disable ? (
        content
      ) : (
        <Link href={`/pokemon/${link}`}>
          <a className={`${disable ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
            {content}
          </a>
        </Link>
      )}
    </button>
  );
};
