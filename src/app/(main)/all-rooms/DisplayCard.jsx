"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DisplayCard = ({ room }) => {
  const pathName = usePathname()
  const isDetailsPage = pathName.includes("/all-rooms/");
  const { name, image, _id, floor, amenities, capacity_min, description, capacity_max, hourly_rate } = room

  return (
    <div>
      <div className="hover:scale-[1.03] transition-all duration-300">

        <div className="card bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">

          {/* image */}
          <figure className="relative h-56 w-full overflow-hidden">
            <Image
              src={image}
              alt={name}
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
                {name}
              </h2>
            </div>


            {isDetailsPage && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {description}
              </p>
            )}

            {/* details */}
            <div className="space-y-2 mt-4">

              {
                isDetailsPage &&
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    Capacity
                  </span>
                  <span className="text-gray-800 dark:text-gray-100">
                    {capacity_min} - {capacity_max} People
                  </span>
                </div>
              }

              <div className="flex justify-between">
                <span className="badge bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-none">
                  Floor {floor}
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                  ${hourly_rate}/hr
                </span>
              </div>

            </div>

            {/* amenities */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Amenities
              </h3>

              <div className="flex flex-wrap gap-2">
                {amenities?.map((item, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* button */}
            <div className="card-actions justify-end mt-5">
              {!isDetailsPage && (
                <Link href={`/all-rooms/${_id}`} className="w-full">
                  <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white border-none transition-all duration-300 hover:scale-105">
                    Details
                  </button>
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;