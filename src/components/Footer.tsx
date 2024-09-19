import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-oscar-purple py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/" className="mb-4">
            <Image src="/logo.png" alt="Oscar the Octopus" width={60} height={60} />
          </Link>
          <div className="mb-4 flex space-x-4">
            <a href="https://twitter.com/OscarOnSui" target="_blank" rel="noopener noreferrer" className="text-white hover:text-oscar-light-blue transition duration-300">
              <FaTwitter className="text-3xl" />
            </a>
            <a href="https://t.me/OscarTheOcto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-oscar-light-blue transition duration-300">
              <FaTelegram className="text-3xl" />
            </a>
          </div>
          <p className="text-center text-white">&copy; 2024 Oscar the Octopus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;