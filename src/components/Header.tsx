import Link from 'next/link';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
      <Link href="/" className="rounded-full bg-white p-2 hover:bg-gray-200">
        <FaHome className="text-2xl text-blue-500" />
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-gray-300">HOME</Link></li>
          <li><Link href="#buy" className="text-white hover:text-gray-300">BUY</Link></li>
          <li><Link href="#chart" className="text-white hover:text-gray-300">CHART</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;