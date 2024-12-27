import Image from "next/image";
import { Poppins } from 'next/font/google'
const poppins = Poppins({
   weight:'800',
   subsets: ['latin'] })

export default function Home() {
  return (
    <div className="m-2">
      <div className={`text-center font-bold text-2xl ${poppins.className}`}>
        Shortening url is much easier now
      </div>
    </div>
  );
}
