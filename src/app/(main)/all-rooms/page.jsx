"use client";

import { studyRooms } from "@/component/studyData";
import DisplayCard from "./DisplayCard";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const AllRoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [amenity, setAmenity] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("")
  // load data once
  useEffect(() => {
    const load = async () => {
      const data = await studyRooms();
      setRooms(data);
    };
    load();
  }, []);

  // filter logic
  const processedRooms = [...rooms]
    .filter((room) => {
      const matchAmenity =
        amenity === "" || amenity === "all"
          ? true
          : room.amenities.includes(amenity);

      const matchSearch =
        search === ""
          ? true
          : room.name.toLowerCase().includes(search.toLowerCase());

      return matchAmenity && matchSearch;
    })
    .sort((a, b) => {
      if (sort === "low") return a.hourly_rate - b.hourly_rate;
      if (sort === "high") return b.hourly_rate - a.hourly_rate;
      return 0;
    });

  const handleFilter = (value) => {
    setAmenity(value);
  };
  const searchHandle = (search) => {
    setSearch(search)
  }
  return (
    <div className="max-w-300 mx-auto">
      <h1 className="text-4xl font-bold pt-20">All Study Rooms</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        <div className="mt-5 px-5 sm:px-10 md:px-0">
          {/* Search */}
          <div className="">
            <h1 className="text-sm mb-2 font-semibold text-gray-400 "> Search By name</h1>

            <label className="input md:w-full w-full sm:w-1/2">
              <FaSearch />
              <input onChange={(e) => searchHandle(e.target.value)} type="search" required placeholder="Search" />
            </label>
          </div>
          <div>
            {/* filter */}
            <h1 className="text-sm mt-5 mb-2 font-semibold text-gray-400">Shorted by Amenities</h1>
            <select
              value={amenity}
              onChange={(e) => handleFilter(e.target.value)}
              className="bg-black text-gray-300 px-4 py-2 md:w-full w-full sm:w-1/2 rounded-2xl"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="all">All</option>
              <option value="wifi">WiFi</option>
              <option value="ac">AC</option>
              <option value="projector">Projector</option>
              <option value="whiteboard">Whiteboard</option>
              <option value="charging">Charging Port</option>
              <option value="quiet-zone">Quiet Zone</option>
              <option value="coffee">Coffee Available</option>
            </select>
          </div>
          <div>
            {/* sorted by price */}
            <h1 className="text-sm mb-2 mt-5 font-semibold text-gray-400">Shorted by Hourly Rate</h1>
            <select
              onChange={(e) => setSort(e.target.value)}
              className="bg-black text-white px-4 py-2 rounded-xl md:w-full w-full sm:w-1/2"
            >
              <option value="">Sort by</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>


        </div>

        {/* cards */}
        {
          processedRooms.length === 0 ?
            <div className="flex flex-col col-span-3 items-center justify-center py-20 px-6 rounded-2xl 
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
                Not Found Data
              </h2>

            </div>
            :
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {processedRooms.map((room) => (
                <DisplayCard key={room._id} room={room} />
              ))}
            </div>
        }

      </div>
    </div>
  );
};

export default AllRoomsPage;