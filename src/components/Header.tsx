'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'STORY', href: '#story' },
    { name: 'MEMES', href: '#memes' },
    { name: 'CHART', href: 'https://dexscreener.com/sui/0xf6a7f616cedfe5c1acd7f877a32079ac8f49814d1aba23df27fc67233c847eed', hasArrow: true },
    { name: 'BUY', href: 'https://hop.ag/swap/SUI-0x4b6d48afff2948c3ccc67191cf0ef175637472b007c1a8601fa18e16e236909c%3A%3Aocto%3A%3AOCTO', hasArrow: true }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6">
          <Link href="/" className="flex-shrink-0 mb-4 sm:mb-0">
            <Image src="/logo-sm.png" alt="Oscar the Octopus" width={250} height={100} className="w-48 sm:w-64 h-auto" />
          </Link>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={index > 2 ? "_blank" : undefined}
                    rel={index > 2 ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg text-center transition duration-300 ${
                      index < 3
                        ? 'bg-purple-800 text-white hover:bg-purple-900'
                        : 'bg-white text-purple-800 hover:bg-purple-800 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {item.hasArrow && <FaArrowRight className="ml-2 text-sm sm:text-base" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;