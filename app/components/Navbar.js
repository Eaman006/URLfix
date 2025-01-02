"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import localFont from 'next/font/local';
const myFont = localFont({ src: './AguDisplay-Regular-VariableFont_MORF.ttf' });
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname(); 

  const getActiveClass = (path) => {
    return pathname === path ? 'text-red-600' : 'hover:text-red-600';
  };

  return (
    <nav className="flex gap-5 px-2 py-2">
      <div className="mx-auto flex">
        <Image src="/loader.gif" width={20} height={10} alt="Loader" />
        <h1 className={`text-4xl text-red-500 cursor-default ${myFont.className}`}>://URLfix</h1>
      </div>
      <ul className="flex gap-7 m-3">
        <li className={`cursor-pointer ${getActiveClass('/')}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`cursor-pointer ${getActiveClass('/about')}`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`cursor-pointer ${getActiveClass('/contact')}`}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className="flex gap-5">
          <Link href="/generate">
            <button>Try Now</button>
          </Link>
          <Link href="https://github.com/Eaman006/URLfix.git">
            <button>GitHub</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
