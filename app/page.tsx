import Image from 'next/image';

import background from './background.png';

export default function Home() {
  return (
    <main className='min-h-screen relative'>
      <Image src={background} quality={100} fill priority alt='' />
      <div className='absolute right-14 bottom-14 flex gap-x-10 [&>a]:drop-shadow-2xl'>
        <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
          <img
            src='/twitter.svg'
            alt='twitter'
            className='h-16 sm:h-14 2xl:h-16 aspect-square'
          />
        </a>
        <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
          <img
            src='/telegram.svg'
            alt='telegram'
            className='h-16 sm:h-14 2xl:h-16 aspect-square'
          />
        </a>
      </div>
    </main>
  );
}
