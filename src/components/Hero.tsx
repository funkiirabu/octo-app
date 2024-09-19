import Image from 'next/image';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/bg.jpg"
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image
          src="/logo-lg.png"
          alt="Oscar the Octopus"
          width={750}
          height={750}
          priority
        />
        <div className="mt-8 flex space-x-4">
          <a href="https://twitter.com/OscarOnSui" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="https://t.me/OscarTheOcto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTelegram className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;