import Image from 'next/image';

const Hero = () => {
  return (
    <header className="w-full flex flex-col xl:flex-row items-center justify-between gap-5 mb-12">
      <section className="w-full lg:!w-[50%] text-text flex flex-col gap-3">
        <article className="flex flex-col gap-5">
          <span className="text-xl font-medium">
            Hi, Lukman Rambe Selamat Datang di
          </span>

          <h1 className="text-primary-text font-bold text-3xl xl:text-5xl leading-relaxed break-after-all">
            Digital Marketing Job Guarantee Bootcamp
          </h1>

          <p className="text-base">
            Raih karier impian dengan pelatihan intensif dan ekslusif bersama
            para high-achievers dengan jaminan 100% uang kembali
          </p>
        </article>

        <article>
          <p className="text-base font-bold">
            100% Alumni Job Guarantee Program telah bekerja di:
          </p>

          <div className="flex flex-col xl:flex-row gap-2 items-center w-full">
            <Image
              src="/assets/images/bukalapak.png"
              width={230}
              height={110}
              alt="Bukalapak"
              className="aspect[2/5] object-contain"
            />

            <Image
              src="/assets/images/gojek.jpg"
              width={230}
              height={110}
              alt="Gojek"
              className="aspect[2/5] object-contain"
            />
          </div>
        </article>
      </section>

      <section className="w-fit">
        <Image
          src="/assets/images/hero-picture.png"
          width={600}
          height={600}
          alt="Gojek"
          className="min-w-full xl:w-[600px] aspect[2/5] object-cover rounded-xl"
        />
      </section>
    </header>
  );
};

export default Hero;
