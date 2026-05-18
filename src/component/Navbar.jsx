import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdBook } from 'react-icons/io';

const Navbar = () => {
    const LinksNav=<>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/all-rooms'}>All Rooms</Link></li>
    <li><Link href={'/add-rooms'}>Add Rooms</Link></li>
    </>
const LinksProfile=<>
  <li><Link href={'/my-listings'}>MY Listings</Link></li>
    <li><Link href={'/my-bookings'}>My Bookings</Link></li>
</>

    return (
        <div className=''>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
   
    <Link href={'/'}>
       <p className="btn btn-ghost text-xl"><IoMdBook size={20} className='bg-gray-300 p-1 w-10 h-10 rounded-full text-gray-500'/> StudyNook</p>
    </Link>
 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
  
  {LinksNav}
  {LinksProfile}
    </ul>
  </div>
  <div className="navbar-end mr-10 items-center flex">
   <details className="dropdown">
  <summary className="btn m-1">
    
    <div className="avatar">
    <div className="w-12">
    <Image
    width={20}
    height={20}
    alt='profile'
    src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
    className='w-12 h-12 rounded-full'
    />
    </div>
  </div>
  </summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
    <div className='md:hidden'>
    {LinksNav}
  </div>
   {LinksProfile}
   <li> <button className='btn btn-error'>SignOut</button></li>
  
  </ul>
</details>
<div>
    <h1 className=''>romjan</h1>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;