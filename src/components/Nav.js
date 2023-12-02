// Nav.js
import React from 'react';
import { nav } from '../data';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex space-x-8'>
        {nav.map((item) => (
          <li key={item.name}>
            <ScrollLink
              to={item.href.slice(1)} // Remove the leading '/'
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className='text-white hover:text-gray-300 cursor-pointer '
            >
              {item.name} {/* Use the item.name directly */}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
