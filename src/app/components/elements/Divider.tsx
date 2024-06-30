import { FC } from 'react';

type DividerPropsType = {
  text?: string;
  isDashed?: boolean;
};

const Divider: FC<DividerPropsType> = ({ text, isDashed }) => {
  if (text) {
    return (
      <article className="flex gap-2 items-center">
        <div
          className={`w-full border-t-[2px] border-gray-200 ${
            isDashed ? 'border-dashed' : 'border-solid'
          }`}
        ></div>
        {text}
        <div
          className={`w-full border-t-[2px] border-gray-200 ${
            isDashed ? 'border-dashed' : 'border-solid'
          }`}
        ></div>
      </article>
    );
  }

  return (
    <div
      className={`border-[.2px] border-gray-200 ${
        isDashed ? 'border-dashed' : 'border-solid'
      }`}
    ></div>
  );
};

export default Divider;
