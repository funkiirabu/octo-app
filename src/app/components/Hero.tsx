import Image from 'next/image';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/hero-background.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image
          src="/oscar-logo-large.png"
          alt="Oscar the Octopus"
          width={300}
          height={300}
        />
        <div className="mt-8 flex space-x-4">
          <a href="https://twitter.com/oscartheoctopus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="https://t.me/oscartheoctopus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTelegram className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;