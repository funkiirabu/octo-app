import Image from 'next/image';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/bg.jpg"
        alt="Oscar Hero"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image
          src="/logo-lg.png"
          alt="Oscar Logo"
          width={750}
          height={750}
          priority
        />
        <div className="mt-8 flex space-x-6">
          <a href="https://twitter.com/OscarOnSui" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaXTwitter className="text-5xl" />
          </a>
          <a href="https://t.me/OscarTheOcto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTelegram className="text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;