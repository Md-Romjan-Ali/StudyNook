"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdBook } from 'react-icons/io';

const Navbar = () => {
const { data: session } = authClient.useSession()
  console.log(session,'from navbar');
  
    const LinksNav=<>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/all-rooms'}>All Rooms</Link></li>
  
    </>
const LinksProfile=<>
  <li><Link href={'/add-rooms'}>Add Rooms</Link></li>
  <li><Link href={'/my-listings'}>MY Listings</Link></li>
    <li><Link href={'/my-bookings'}>My Bookings</Link></li>
</>

    return (
       <div className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-cyan-900/80 via-sky-800/80 to-blue-900/80 border-b border-cyan-400/20 shadow-lg">
  
  <div className="navbar max-w-7xl mx-auto text-white px-4">
    
    {/* Left */}
    <div className="navbar-start">
      
      {/* Mobile menu */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-slate-900 rounded-box w-52 text-white"
        >
          {LinksNav}
          {session && LinksProfile}
        </ul>
      </div>

      {/* Logo */}
      <Link href={"/"} className="flex items-center gap-3">
        <div className="bg-cyan-400/20 p-2 rounded-full border border-cyan-300/30">
          <IoMdBook
            size={28}
            className="text-cyan-300"
          />
        </div>

        <h1 className="text-2xl font-extrabold tracking-wide">
          StudyNook
        </h1>
      </Link>
    </div>

    {/* Center */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-2 font-medium">
        {LinksNav}
        {session && LinksProfile}
      </ul>
    </div>

    {/* Right */}
    <div className="navbar-end">

      {session ? (
        <div className="flex items-center gap-4">

          {/* Name */}
          <h1 className="hidden md:block font-semibold text-cyan-100">
            {session?.user?.name}
          </h1>

          {/* Profile */}
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost btn-circle avatar">
              <div className="w-11 rounded-full border-2 border-cyan-300 shadow-lg">
                <Image
                  width={50}
                  height={50}
                  alt="profile"
                  src={
                    session?.user?.image ||
                    "https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                  }
                />
              </div>
            </summary>

            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-slate-900 rounded-2xl w-52 text-white border border-cyan-400/10">
              
              <div className="md:hidden">
                {LinksNav}
              </div>

              {LinksProfile}

              <li className="mt-2">
                <button className="btn btn-error btn-sm text-white">
                  Sign Out
                </button>
              </li>
            </ul>
          </details>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link href={"/login"}>
            <button className="btn btn-outline border-cyan-300 text-cyan-200 hover:bg-cyan-400 hover:text-black rounded-xl">
              Login
            </button>
          </Link>

          <Link href={"/registration"}>
            <button className="btn bg-cyan-400 hover:bg-cyan-300 border-none text-black rounded-xl">
              Create Account
            </button>
          </Link>
        </div>
      )}
    </div>
  </div>
</div>
    );
};

export default Navbar;