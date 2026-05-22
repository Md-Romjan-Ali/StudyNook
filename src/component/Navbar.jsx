"use client"

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { IoMdBook } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
  const { data: session } = authClient.useSession()
  const name = session?.user?.name.split(" ")[0]

  const logOutHanle = async () => {
    await authClient.signOut()
    redirect("/")
  }

  const LinksNav = <>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/all-rooms'}>All Room</Link></li>

  </>
  const LinksProfile = <>
    <li><Link href={'/add-rooms'}>Add Room</Link></li>
    <li><Link href={'/my-listings'}>My Listings</Link></li>
    <li><Link href={'/my-booking'}>My Bookings</Link></li>
  </>

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-cyan-900/80 via-sky-800/80 to-blue-900/80 border-b border-cyan-400/20 shadow-lg">

      <div className="navbar max-w-7xl mx-auto text-white px-4">

        {/* Left */}
        <div className="navbar-start">
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-3">
            <div className="bg-cyan-400/20 p-2 rounded-full border border-cyan-300/30">
              <IoMdBook
                size={28}
                className="text-cyan-300"
              />
            </div>

            <h1 className="text-3xl font-extrabold tracking-wide">
              StudyRoom
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
        <div className='hidden'>

        </div>
        <div className="navbar-end">

          {session ? (
            <div className="flex items-center gap-4">

              {/* Profile */}
              <div className="dropdown dropdown-end">
                <summary tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-15 rounded-full border-2 border-cyan-300 shadow-lg">
                    <Image
                      width={80}
                      height={80}
                      alt="profile"
                      src={
                        session?.user?.image ||
                        "https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                      }

                    />
                  </div>
                </summary>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-slate-900 rounded-2xl w-45 text-white border border-cyan-400/10">

                  <div className="lg:hidden">
                    {LinksNav}
                  </div>

                  {LinksProfile}

                  <li className="mt-2">
                    <button onClick={logOutHanle} className="btn btn-error btn-sm text-white">
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
              {/* Name */}
              <h1 className="font-semibold text-cyan-100">
                Hi, {name}
              </h1>
            </div>
          ) : (
            <>

              <div className="dropdown dropdown-end lg:hidden">
                <label tabIndex={0} className="btn btn-ghost">
                  <MdMenu size={30} />
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
                >
                  {LinksNav}
                  <div className="">
                    <Link href={"/login"}>
                      <button className="btn btn-outline my-4 border-cyan-300 text-cyan-200 hover:bg-cyan-400 hover:text-black rounded-xl">
                        Login
                      </button>
                    </Link>

                    <Link href={"/registration"}>
                      <button className="btn bg-cyan-400 hover:bg-cyan-300 border-none text-black rounded-xl">
                        Create Account
                      </button>
                    </Link>
                  </div>

                </ul>
              </div>

              <div className="hidden lg:flex gap-3">
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
            </>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;