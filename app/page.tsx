import Image from "next/image";

import maccas from "./maccas.svg";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <video
        autoPlay
        playsInline
        muted
        src="/background.mp4"
        className="w-screen h-screen object-cover"
      ></video>
      <img
        src="/tokenomics.svg"
        alt=""
        className="absolute top-[20%] left-[20%]"
      />
      <div className="absolute left-14 top-14 flex gap-x-10 [&>a]:drop-shadow-2xl">
        <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_twitter">
          <img
            src="/twitter.svg"
            alt="twitter"
            className="h-16 sm:h-14 2xl:h-16 aspect-square"
          />
        </a>
        <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target="_telegram">
          <img
            src="/telegram.svg"
            alt="telegram"
            className="h-16 sm:h-14 2xl:h-16 aspect-square"
          />
        </a>
      </div>
    </main>
  );
}
