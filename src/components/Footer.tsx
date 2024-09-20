import Link from 'next/link';
import Image from 'next/image';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-purple-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/" className="mb-4">
            <Image src="/logo.png" alt="Oscar the Octopus" width={60} height={60} />
          </Link>
          <div className="mb-4 flex space-x-6">
            <a href="https://twitter.com/OscarOnSui" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition duration-300">
              <FaXTwitter className="text-4xl" />
            </a>
            <a href="https://t.me/OscarTheOcto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition duration-300">
              <FaTelegram className="text-4xl" />
            </a>
          </div>
          <p className="text-center text-white">&copy; 2024 Oscar the Octopus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;