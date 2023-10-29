'use client';

import { Bars3Icon, BookOpenIcon, ClipboardIcon, HomeIcon, LinkIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LiNKS = [
  { href: '/', label: '홈', icon: <HomeIcon className="h-4 w-4" /> },
  { href: '/about', label: '소개', icon: <ClipboardIcon className="h-4 w-4" /> },
  { href: '/blog', label: '블로그', icon: <BookOpenIcon className="h-4 w-4" /> },
  { href: '/service', label: '서비스', icon: <LinkIcon className="h-4 w-4" /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 768 && setIsOpen(false));
  }, []);

  return (
    <header
      style={{ height: isOpen ? '310px' : '75px' }}
      className=" overflow-hidden bg-white px-8 shadow-default transition-all duration-500 md:container backdrop:blur-md md:mt-4 md:justify-normal md:rounded-2xl"
    >
      <div className="flex h-[75px] items-center justify-between gap-8">
        <h1 className="leading-normal">
          <b>Abel Beak Homepage</b>
        </h1>
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {LiNKS.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-1 font-medium leading-normal transition-all hover:font-bold"
              >
                {item.icon} {item.label}
              </Link>
            );
          })}
        </nav>
        <button className="shadow-button hidden rounded-lg bg-gray-900 px-4 py-2.5 font-bold text-white md:flex">
          SIGN IN
        </button>
        <button
          className="rounded-lg p-1 transition-all hover:bg-gray-200 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      <div className="flex flex-col gap-1 md:hidden">
        <nav className="flex-1 items-center justify-center gap-8">
          {LiNKS.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-2 py-2 font-medium leading-normal transition-all hover:font-bold"
              >
                {item.icon} {item.label}
              </Link>
            );
          })}
        </nav>
        <button className="shadow-button mt-4 w-full rounded-lg bg-gray-900 py-2.5 text-center font-bold text-white">
          SIGN IN
        </button>
      </div>
    </header>
  );
}
