import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'
const myFont = localFont({ src: './AguDisplay-Regular-VariableFont_MORF.ttf' })
import Image from 'next/image'



const Navbar = () => {
  return (
    <nav className='flex gap-5 px-2 py-2'>
        <div className='mx-auto flex'>
        <Image
      src="/loader.gif"
      width={30}
      height={30}
      alt="Picture of the author"
    />
            <h1 className={`text-4xl text-red-500 cursor-default ${myFont.className}`}>://URLfix</h1>
        </div>
        <ul className='flex gap-7 m-3'>
            <Link href="/"> <li className='hover:text-blue-400 cursor-pointer'>Home</li></Link>
            <Link href="/about"> <li className='hover:text-blue-400 cursor-pointer'>About</li></Link>
            <Link href="/contact"> <li className='hover:text-blue-400 cursor-pointer'>Contact</li></Link>
            <li className='flex gap-5'>
              <Link href="/generate"><button>TryNow</button></Link>
              <Link href="https://github.com/Eaman006/URLfix.git"><button>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
