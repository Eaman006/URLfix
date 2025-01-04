import Image from "next/image";
import { Poppins } from 'next/font/google'
import background from './background.jpg'
import Link from "next/link";


const poppins = Poppins({
  weight: '800',
  subsets: ['latin']
})

export default function Home() {
  return (
    <div className="relative md:w-full w-[100%] h-screen md:h-[91vh]">
      
      <div className={`absolute inset-0 flex items-center justify-center text-white`}>
        <div className="bg-[#ffffff29] rounded-lg border border-white p-2">
          <h1 className={`m-2 font-bold text-center text-xl ${poppins.className}`}>Shortening url easier now</h1>
          <div className="m-2 flex gap-2">
            <Image 
            alt="arrow" 
            src="/right.png"
            width={20}
            height={5}
            />
            <div className="">It is free to use</div>
          </div>
          <div className="m-2 flex gap-2">
          <Image 
            alt="arrow" 
            src="/right.png"
            width={20}
            height={5}
            />
            <div>No Sign-ups are required</div>
          </div>
          <div className="m-2 flex gap-2">
          <Image 
            alt="arrow" 
            src="/right.png"
            width={20}
            height={5}
            />
            <div>Enjoy ads free premium experiences</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="m-2 bg-purple-500 hover:bg-purple-800 p-2 font-bold rounded-full border border-white"><Link href="/generate">Try Now!</Link></button>
            <button className="m-2 bg-black hover:bg-gray-800 p-2 font-bold rounded-full border border-white"><Link href="https://github.com/Eaman006/URLfix.git">GitHub</Link></button>
          </div>
        </div>

      </div>
    </div>
  );
}
