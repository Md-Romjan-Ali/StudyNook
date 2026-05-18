"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DisplayCard = ({room}) => {
  const pathName=usePathname()
  const isDetailsPage = pathName.includes("/all-rooms/");
     const {name,image,_id,floor,amenities,capacity_min,description,capacity_max,hourly_rate}=room
    return (
        <div>
            <div className=' hover:scale-105 transition-all'>
                      <div className="card bg-base-100 shadow-xl border">
            
                  <figure className="relative h-56 w-full">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover hover:scale-105 transition-all"
                    />
                  </figure>
            
                  <div className="card-body">
            
                    <div className="flex items-center justify-between">
                      <h2 className="card-title text-xl">
                        {name}
                      </h2>
            
                      <span className="badge badge-primary">
                        Floor {floor}
                      </span>
                    </div>
            {
              !isDetailsPage &&
              <p className="text-sm text-gray-500">
                      {description}
                    </p>
            }
                    
            
                    <div className="space-y-2 mt-3">
            
                      <div className="flex justify-between">
                        <span className="font-medium">
                          Capacity
                        </span>
            
                        <span>
                          {capacity_min} - {capacity_max} People
                        </span>
                      </div>
            
                      <div className="flex justify-between">
                        <span className="font-medium">
                          Hourly Rate
                        </span>
            
                        <span className="text-primary font-bold">
                          ${hourly_rate}/hr
                        </span>
                      </div>
            
                    </div>
            
                    <div className="mt-4">
            
                      <h3 className="font-semibold mb-2">
                        Amenities
                      </h3>
            
                      <div className="flex flex-wrap gap-2">
            
                        {

                          amenities?.map((item, index) => (
                            <span
                              key={index}
                              className="badge badge-outline"
                            >
                              {item}
                            </span>
                          ))
                        }
            
                      </div>
                    </div>
            
                    <div className="card-actions justify-end mt-5">
                      {
                        !isDetailsPage &&                                               
                      <button className="btn btn-primary w-full">
                        <Link href={`/all-rooms/${_id}`}>
                        Details
                        </Link>
                      </button>
                      }
            
                      
            
                    </div>
            
                  </div>
                </div>
                    </div>
        </div>
    );
};

export default DisplayCard;