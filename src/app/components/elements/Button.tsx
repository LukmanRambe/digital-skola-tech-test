import Link from 'next/link';
import { FC, ReactElement } from 'react';

type ButtonPropsType = {
  text: string;
  variant: 'primary' | 'secondary' | 'cta';
  isLink?: boolean;
  href?: string;
  isCircle?: boolean;
  icon?: ReactElement;
  classNames?: string;
  onClick?: () => void;
};

const Button: FC<ButtonPropsType> = ({
  text,
  variant,
  isLink,
  href,
  isCircle,
  icon,
  classNames,
  onClick,
}) => {
  const commonClassNames = `font-semibold py-1.5 px-4 transition-colors ease-in-out duration-200 ${
    isCircle ? 'rounded-full' : 'rounded-lg'
  } ${classNames}`;
  const variants = {
    primary: `bg-primary-700 hover:bg-primary-800 focus-visible:bg-primary-800 active:bg-primary-800 text-white`,
    secondary: `bg-secondary-400 text-primary-text hover:bg-secondary-500 focus-visible:bg-secondary-500 active:bg-secondary-500`,
    cta: `bg-green-500 text-white hover:bg-green-600 focus-visible:bg-green-600 active:bg-green-600`,
  };

  if (icon) {
    return (
      <article className="flex flex-col gap-2 items-center">
        <button
          className={`${commonClassNames} ${variants[variant]} py-4 px-4 rounded-full `}
          onClick={onClick}
        >
          <span>{icon}</span>
        </button>

        <span className="text-sm">{text}</span>
      </article>
    );
  }

  if (isLink) {
    return (
      <Link
        href={`${href}`}
        className={`${commonClassNames} ${variants[variant]}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button className={`${commonClassNames} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
