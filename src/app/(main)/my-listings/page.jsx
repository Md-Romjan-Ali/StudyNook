import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MyListings =async () => {
     const session  = await auth.api.getSession({
        headers: await headers()
       })
        const email=session?.user.email
      const listing=await fetch(`http://localhost:5000/mylistingdata/${email}`)
    const lists= await listing.json()
    console.log(lists,'muy listing');
    return (
       <div>
{
    lists.length<0 ?
    <div className="flex flex-col items-center justify-center py-20 px-6 rounded-2xl 
bg-gradient-to-br from-gray-100 to-gray-200 
dark:from-gray-900 dark:to-gray-800 
border border-gray-200 dark:border-gray-700 
shadow-lg text-center">

  {/* icon */}
  <div className="w-20 h-20 rounded-full 
    bg-indigo-100 dark:bg-indigo-900/40 
    flex items-center justify-center mb-5">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M7 15h1m4 0h5M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
      />
    </svg>
  </div>

  {/* title */}
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
    No Study Rooms Added Yet
  </h2>

  {/* description */}
  <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md">
    You haven’t added any study rooms yet. Create your first room and start managing bookings easily.
  </p>

  {/* button */}
  <button className="btn mt-6 
    bg-indigo-500 hover:bg-indigo-600 
    dark:bg-indigo-600 dark:hover:bg-indigo-500 
    border-none text-white px-8 
    transition-all duration-300 hover:scale-105">
    Add New Room
  </button>
</div>
    :


         <div className={`${lists.length==1 && 'grid-cols-1 mx-auto max-w-sm'} grid grid-cols-2 gap-5 my-10 md:grid-cols-3`}>
            {
lists.map((list)=><div className="hover:scale-[1.03] transition-all duration-300" key={list._id}>

  <div className="card bg-gray-50 dark:bg-gray-900 
    shadow-lg hover:shadow-2xl 
    border border-gray-200 dark:border-gray-700 
    rounded-xl overflow-hidden">

    {/* image */}
    <figure className="relative h-56 w-full overflow-hidden">
      <Image
        src={list.image}
        alt={list.name}
        fill
        className="object-cover transition-transform duration-500 hover:scale-110"
      />
      {/* overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </figure>

    {/* body */}
    <div className="card-body text-gray-700 dark:text-gray-200">

      {/* title + badge */}
      <div className="flex items-center justify-between">
        <h2 className="card-title text-xl font-bold text-gray-800 dark:text-white">
          {list.name}
        </h2>

        <span className="badge bg-emerald-100 text-emerald-700 
          dark:bg-emerald-900/40 dark:text-emerald-300 
          border-none">
          Floor {list.floor}
        </span>
      </div>

      {/* description */}
    
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {list.description}
        </p>
    

      {/* details */}
      <div className="space-y-2 mt-4">

        <div className="flex justify-between">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            Capacity
          </span>
          <span className="text-gray-800 dark:text-gray-100">
            {list.capacity_min} - {list.capacity_max} People
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            Hourly Rate
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">
            ${list.hourly_rate}/hr
          </span>
        </div>

      </div>

      {/* amenities */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
          Amenities
        </h3>

        <div className="flex flex-wrap gap-2">
          {list.amenities?.map((item, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full text-xs font-medium
                bg-gray-200 text-gray-700
                dark:bg-gray-800 dark:text-gray-300
                hover:bg-indigo-100 dark:hover:bg-indigo-900/40
                transition`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* button */}
      <div className="card-actions justify-end mt-5">
       
          <Link href={`/all-rooms/${list._id}`} className="w-full">
            <button className="btn w-full 
              bg-indigo-500 hover:bg-indigo-600 
              dark:bg-indigo-600 dark:hover:bg-indigo-500 
              text-white border-none 
              transition-all duration-300 hover:scale-105">
              Details
            </button>
          </Link>
   
      </div>

    </div>
  </div>
</div>)
            }
           
        </div>}
       </div>
    );
};

export default MyListings;