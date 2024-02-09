import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Use useEffect to log the router on mount
  useEffect(() => {
    console.log(router);
  }, []);

  return (
    <div className="nav bg-blue-800 h-[10vh] w-full p-[15px] ">
      <div className="flex justify-between items-center h-full">
        <div className="text-white text-2xl font-bold">Logo</div>
        <div className="relative">
          <div
            className="rounded-[50%] h-[5.5vh] overflow-hidden border-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon="user" size="3x" />
          </div>
          {isOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border rounded-md shadow-md text-black">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                <Link href="/forgetpassword">
                    Forget Password
                </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                <Link href="/profile/basic">
                    Profile
                </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                <Link href="/signin">
                    Sign In
                </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
