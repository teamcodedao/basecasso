import Image from 'next/image';

import mcdonals from './mcdonals.png';

export default function Home() {
  return (
    <main className='min-h-screen relative'>
      <Image
        src={mcdonals}
        fill
        priority
        quality={100}
        alt=''
        style={{
          objectFit: 'cover',
        }}
      />
    </main>
  );
}
