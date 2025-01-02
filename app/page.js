import Image from "next/image";
import { Poppins } from 'next/font/google'
import background from './background.jpg'

const poppins = Poppins({
   weight:'800',
   subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative md:w-full w-[150%] h-[130vh] md:h-[91vh]">
       <Image
    alt="background"
    src={background}
    placeholder="blur"
    quality={100}
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
    }}
  />
      <div className={`absolute inset-0 flex items-center justify-center text-center font-bold text-2xl text-white ${poppins.className}`}>
        Shortening url is much easier now
      </div>
    </div>
  );
}
