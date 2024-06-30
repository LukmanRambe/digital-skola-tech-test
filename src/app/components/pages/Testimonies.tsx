'use client';

import { IoMdArrowRoundDown } from 'react-icons/io';
import Button from '../elements/Button';
import { useRef } from 'react';
import Sidebar from '../fragments/Sidebar';
import TestimonyCard from '../elements/TestimonyCard';
import { Testimony } from '@/app/ts/types/Testimony';

const Testimonies = () => {
  const testimoniesRef = useRef<HTMLElement | null>(null);
  const testimonies: Testimony[] = [
    {
      id: 1,
      username: 'Agus Rangga Dwi Wibowo',
      imageUrl: '/assets/images/photo-profile-1.jpg',
      title: {
        last: 'Digital Campaign Optimizer',
        current: 'Digital Marketer Intern',
      },
      company: {
        last: 'SOB Digital',
        current: 'Katova Creative',
      },
      testimony:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto velit amet veniam voluptatem natus cupiditate ratione tempora, accusamus mollitia, laborum omnis minima. Eos possimus modi sunt sint odio at ad esse a ex delectus quia, magni, omnis quae totam dignissimos impedit hic cum. Culpa nesciunt enim deserunt labore expedita dolores iusto ad, eaque vel non incidunt quisquam ipsum eius odit commodi. Eum quidem quibusdam sunt in, numquam aperiam qui suscipit asperiores id rerum obcaecati repellendus adipisci odit odio atque perferendis nisi ipsa, dicta sapiente et nostrum nam tempora mollitia. Repellendus, ipsa reprehenderit est eos assumenda culpa vel soluta velit! Libero?',
      duration: '2 Bulan',
    },
    {
      id: 2,
      username: 'Faiz Muhammad Azhar',
      imageUrl: '/assets/images/photo-profile-2.jpg',
      title: {
        last: 'Marketing Staff',
        current: 'Marketplace Operation',
      },
      company: {
        last: 'Evermos',
        current: 'Sinar Jaya Konstruksi',
      },
      testimony:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempore incidunt soluta consequuntur. Ducimus tempora fuga expedita mollitia, natus molestiae eligendi enim veniam perferendis repellat aliquam nisi, blanditiis deleniti incidunt cupiditate nulla. Nemo perspiciatis, dicta incidunt sequi recusandae consectetur quaerat doloremque similique atque eveniet commodi maxime voluptas perferendis tempore consequatur, rem vel numquam voluptates, ipsa beatae earum quo labore libero iste. Minus illo cupiditate cum tempora aspernatur veniam provident nulla quod amet impedit, quo repudiandae.',
      duration: '2 Bulan',
    },
  ];

  const handleClick = () => {
    testimoniesRef.current?.scrollIntoView();
  };

  return (
    <section className="flex flex-col pb-40 sm:pb-28 xl:pb-0">
      <Button
        text="Lihat Testimoni"
        icon={<IoMdArrowRoundDown className="w-7 h-7" />}
        variant="primary"
        isLink
        href="#testimonies"
        isCircle
        onClick={handleClick}
        classNames="w-fit"
      />

      <article ref={testimoniesRef} className="flex gap-5 mt-7">
        <article className="flex flex-col justify-between p-3 py-8 xl:p-10 min-w-[20%] max-w-full bg-gradient-to-b from-primary-700 to-primary-900 drop-shadow-lg rounded-2xl">
          <article className="flex flex-col gap-2 mb-10">
            <h3 className="font-bold text-white text-lg text-center">
              Pengalaman Alumni
            </h3>

            <p className="w-fit bg-secondary-500 text-white mx-auto text-center text-2xl xl:text-[32px] font-bold py-1 px-2 rounded-lg">
              Job Guarantee Program
            </p>
          </article>

          <article className="flex flex-col xl:flex-row gap-4">
            {testimonies.map((testimony) => (
              <TestimonyCard
                username={testimony.username}
                imageUrl={testimony.imageUrl}
                title={testimony.title}
                company={testimony.company}
                testimony={testimony.testimony}
                duration={testimony.duration}
              />
            ))}
          </article>

          <Button
            variant="primary"
            text="Lihat lebih banyak testimoni"
            isLink
            href="#"
            classNames="w-fit my-20 mx-auto"
          />

          <p className="w-full bg-black/30 text-white mx-auto text-[22px] text-center font-bold py-3.5 px-2 rounded-lg">
            Apa Kata Mereka?
          </p>
        </article>

        <Sidebar />
      </article>
    </section>
  );
};

export default Testimonies;
