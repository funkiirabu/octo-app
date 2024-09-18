import Link from 'next/link';
import { FaHome, FaTwitter, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <Link href="/" className="mb-4 rounded-full bg-white p-2 hover:bg-gray-200">
          <FaHome className="text-2xl text-blue-500" />
        </Link>
        <div className="mb-4 flex space-x-4">
          <a href="https://twitter.com/oscartheoctopus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="https://t.me/oscartheoctopus" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaTelegram className="text-3xl" />
          </a>
        </div>
        <p className="text-center text-white">&copy; 2024 Oscar the Octopus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;