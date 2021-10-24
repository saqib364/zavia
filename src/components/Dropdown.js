import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <BrowserRouter>
        <Link to='/' className='p-4'>
          Home
        </Link>
        <Link to='/about' className='p-4'>
          About
        </Link>
        <Link to='/blogs' className='p-4'>
          Blogs
        </Link>
        <Link to='/contact' className='p-4'>
          Contact
        </Link>
        <Link to='/register' className='p-4'>
          Register
        </Link>
        <Link to='/signin' className='p-4'>
          SingIn
        </Link>
        </BrowserRouter>
    </div>
  );
};

export default Dropdown;