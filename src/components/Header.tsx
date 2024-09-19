'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'STORY', href: '#story' },
    { name: 'MEMES', href: '#memes' },
    { name: 'CHART', href: 'https://dexscreener.com/sui/0xf6a7f616cedfe5c1acd7f877a32079ac8f49814d1aba23df27fc67233c847eed' },
    { name: 'BUY', href: 'https://hop.ag/swap/SUI-0x4b6d48afff2948c3ccc67191cf0ef175637472b007c1a8601fa18e16e236909c%3A%3Aocto%3A%3AOCTO' }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6">
          <Link href="/" className="flex-shrink-0 mb-4 sm:mb-0">
            <Image src="/logo.png" alt="Oscar the Octopus" width={60} height={60} className="sm:w-20 sm:h-20" />
          </Link>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
              {menuItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={index > 2 ? "_blank" : undefined}
                    rel={index > 2 ? "noopener noreferrer" : undefined}
                    className={`inline-block px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg text-center transition duration-300 ${
                      index < 3
                        ? 'bg-oscar-purple text-white hover:bg-opacity-80'
                        : 'bg-white text-oscar-purple hover:bg-oscar-light-purple hover:text-white'
                    }`}
                  >
                    {item.name}
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