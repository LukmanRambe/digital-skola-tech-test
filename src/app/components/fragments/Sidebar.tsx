import { formatCurreny } from '@/app/utils/formatCurrency';
import { formatPercentage } from '@/app/utils/formatPercentage';
import Button from '../elements/Button';
import Divider from '../elements/Divider';
import Link from '../elements/Link';
import useScreenSize from '@/app/hooks/useScreenSize';

const Sidebar = () => {
  const { width } = useScreenSize();
  const basePrice = 4_499_999;
  const discount = 22;
  const discountedPrice = basePrice - (basePrice * discount) / 100;

  if (width <= 1024) {
    return (
      <aside className="flex flex-col gap-3 fixed left-0 bottom-0 w-full h-fit p-3 bg-white drop-shadow-lg">
        <p className="text-[#1d1f20] text-sm font-semibold">Online Bootcamp</p>

        <article className="flex justify-between items-center gap-4">
          <article>
            <span className="text-[#757575] line-through text-sm">
              {formatCurreny(basePrice)}
            </span>

            <article className="flex gap-3">
              <span className="text-sm text-white bg-red-600 py-px px-2 rounded-[4px]">
                {formatPercentage(discount)}
              </span>

              <span className="text-[#fbc037] text-base font-bold">
                {formatCurreny(discountedPrice)}
              </span>
            </article>
          </article>

          <Button
            text="Daftar Sekarang"
            variant="secondary"
            classNames="text-sm"
          />
        </article>

        <Divider />

        <article className="flex flex-row items-center justify-center gap-1">
          <Link
            href="#"
            text="Lihat Detail Program"
            classNames="text-[13px] sm:text-sm text-center"
          />

          <span className="text-xs text-gray-500">atau</span>

          <Link
            href="#"
            text="Klaim Discount Di Sini!"
            classNames="text-[13px] sm:text-sm text-center"
          />
        </article>
      </aside>
    );
  }

  return (
    <aside className="hidden sticky inset-0 xl:flex flex-col justify-between gap-3 w-full min-w-[20%] h-fit p-4 bg-white drop-shadow-lg rounded-2xl">
      <article className="h-60">
        <span className="text-[#757575] text-xs">Detail</span>
      </article>

      <Divider />

      <p className="text-[#1d1f20] text-sm font-semibold">Online Bootcamp</p>

      <Divider isDashed />

      <article className="flex flex-col gap-2">
        <span className="text-[#757575] line-through text-sm">
          {formatCurreny(basePrice)}
        </span>

        <article className="flex gap-3">
          <span className="text-sm text-white bg-red-600 py-px px-2 rounded-[4px]">
            {formatPercentage(discount)}
          </span>

          <span className="text-[#fbc037] text-base font-bold">
            {formatCurreny(discountedPrice)}
          </span>
        </article>

        <article className="flex flex-col gap-2 mt-4">
          <Button text="Daftar Sekarang" variant="secondary" />

          <Button text="Klaim Discount Di Sini!" variant="cta" />
        </article>
      </article>

      <Divider text="atau" />

      <Link
        href="#"
        text="Lihat Detail Program"
        classNames="py-2 text-center"
      />
    </aside>
  );
};

export default Sidebar;
