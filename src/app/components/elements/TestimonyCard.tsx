import Image from 'next/image';
import { FC } from 'react';
import { IoMdArrowRoundDown } from 'react-icons/io';

type TestimonyCardPropsType = {
  username: string;
  imageUrl: string;
  title: {
    last: string;
    current: string;
  };
  company: {
    last: string;
    current: string;
  };
  testimony: string;
  duration: string;
};

const TestimonyCard: FC<TestimonyCardPropsType> = ({
  username,
  imageUrl,
  title,
  company,
  testimony,
  duration,
}) => {
  return (
    <article className="flex flex-col justify-between gap-4 min-w-[20%] max-w-full p-5 bg-white drop-shadow-lg rounded-2xl">
      <article className="flex flex-col gap-4">
        <article className="flex items-center gap-4">
          <Image
            src={imageUrl}
            height={50}
            width={50}
            alt={username}
            className="aspect-square rounded-full object-contain"
          />

          <article>
            <h5 className="text-lg font-semibold text-primary-text">
              {username}
            </h5>
            <p className="text-sm text-gray-400">
              {title.current} at {company.current}
            </p>
          </article>
        </article>

        <p className="w-full text-primary-text font-light">{testimony}</p>
      </article>

      <article className="flex flex-col items-center justify-end gap-1 bg-[#fafafa] border border-[#c2c2c2] p-2 rounded-[4px] min-h-fit">
        <span className="text-xs font-light text-[#757575]">
          Sebelum Bootcamp
        </span>

        <p className="text-sm font-semibold text-primary-text">
          {title.last} at {company.last}
        </p>

        <IoMdArrowRoundDown className="text-primary-600 w-5 h-5" />

        <p className="text-sm font-semibold text-primary-text text-center">
          Setelah {duration} bootcamp dapat kerja di {company.current}
        </p>
      </article>
    </article>
  );
};

export default TestimonyCard;
