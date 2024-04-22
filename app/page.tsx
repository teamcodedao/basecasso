'use client';

import Image from 'next/image';
import clsx from 'clsx';
import {Thursday} from 'moving-letters';

import {useMounted} from '@/lib/use-mounted';

import background from './background.png';

export default function Home() {
  const isMounted = useMounted();

  return (
    <main className='relative overflow-hidden'>
      <Image
        src={background}
        quality={100}
        priority
        alt=''
        className='w-screen h-screen object-cover object-bottom'
      />
      <div
        className={clsx(
          'absolute right-14 bottom-14 flex gap-x-10 [&>a]:drop-shadow-2xl',
          'max-[635px]:multi-[`w-full;bottom-14;right-0;justify-center`]'
        )}
      >
        <a
          href={process.env.NEXT_PUBLIC_TWITTER_URL}
          target='_twitter'
          className='transition-all hover:multi-[`scale-105;rotate-[-360deg]`]'
        >
          <img
            src='/twitter.svg'
            alt=''
            className='h-[70px] aspect-square drop-shadow-normal'
          />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
          target='_telegram'
          className='transition-all hover:multi-[`scale-105;rotate-[360deg]`]'
        >
          <img
            src='/telegram.svg'
            alt=''
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
          <div className='text-8xl'>
            {isMounted ? <Thursday text='Basecasso' /> : <h1>Basecasso</h1>}
          </div>
          <p className='text-[40px]'>Supply: 50.000.000</p>
        </hgroup>
        <a
          href={process.env.NEXT_PUBLIC_COIN_URL}
          target='_buy'
          className={clsx(
            'text-[40px] border-4 rounded-[19px] border-white px-8 py-px inline-block mt-5 transition',
            'hover:multi-[`text-[#1861FF];bg-white`]'
          )}
        >
          BUY $BACASO
        </a>
      </div>
    </main>
  );
}
