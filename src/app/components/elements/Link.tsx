import NextLink from 'next/link';
import { FC } from 'react';

type LinkPropsType = {
  href: string;
  text: string;
  classNames?: string;
};

const Link: FC<LinkPropsType> = ({ href, text, classNames }) => {
  return (
    <NextLink
      href={href}
      className={`font-semibold underline cursor-pointer hover:text-primary-800 focus-visible:text-primary-800 active:text-primary-900 transition-colors duration-200 ${classNames}`}
    >
      {text}
    </NextLink>
  );
};

export default Link;
