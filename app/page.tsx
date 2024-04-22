import Image from 'next/image';
import clsx from 'clsx';

import background from './background.png';

export default function Home() {
  return (
    <main className='relative overflow-hidden'>
      <Image
        src={background}
        quality={100}
        priority
        alt=''
        className='w-screen h-screen object-cover'
      />
      <div
        className={clsx(
          'absolute right-14 bottom-14 flex gap-x-10 [&>a]:drop-shadow-2xl',
          'max-[635px]:multi-[`w-full;bottom-14;right-0;justify-center`]'
        )}
      >
        <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
          <img
            src='/twitter.svg'
            alt='twitter'
            className='h-[70px] aspect-square drop-shadow-normal'
          />
        </a>
        <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
          <img
            src='/telegram.svg'
            alt='telegram'
            className='h-[70px] aspect-square drop-shadow-normal'
          />
        </a>
      </div>
      <div
        className={clsx(
          'absolute bottom-14 lg:bottom-24 left-[10%] lg:left-[20%]',
          'max-[635px]:multi-[`bottom-40;left-0;w-full;flex;flex-col;justify-center;items-center;px-2;[&>hgroup]:text-center`]'
        )}
      >
        <hgroup>
          <h1 className='text-8xl'>Basecasso</h1>
          <p className='text-[40px]'>Supply: 50.000.000</p>
        </hgroup>
        <a
          href={process.env.NEXT_PUBLIC_COIN_URL}
          target='_buy'
          className='text-[40px] border-4 rounded-[19px] border-white px-8 py-px inline-block mt-5'
        >
          BUY $BACASO
        </a>
      </div>
    </main>
  );
}
