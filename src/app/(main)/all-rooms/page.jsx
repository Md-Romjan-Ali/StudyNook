"use client";

import { studyRooms } from "@/component/studyData";
import DisplayCard from "./DisplayCard";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const AllRoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [amenity, setAmenity] = useState("");
  const [search, setSearch] = useState("");

  // load data once
  useEffect(() => {
    const load = async () => {
      const data = await studyRooms();
      setRooms(data);
    };
    load();
  }, []);

  // filter logic
 const filteredRooms = rooms.filter((room) => {
  const matchAmenity =
    amenity === "" || amenity === "all"
      ? true
      : room.amenities.includes(amenity);

  const matchSearch =
    search === ""
      ? true
      : room.name.toLowerCase().includes(search.toLowerCase());

  return matchAmenity && matchSearch;
});

  const handleFilter = (value) => {
    setAmenity(value);
  };
const searchHandle=(search)=>{
setSearch(search)
}
  return (
    <div className="max-w-300 mx-auto">
      <h1 className="text-4xl font-bold mt-20">All Study Rooms</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* filter */}
        <div className="mt-5">
          <select
            value={amenity}
            onChange={(e) => handleFilter(e.target.value)}
            className="bg-black text-gray-300 px-4 py-2 w-full rounded-2xl"
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
{/* Search */}
<label className="input mt-4">
  <FaSearch/>
  <input onChange={(e)=>searchHandle(e.target.value)} type="search" required placeholder="Search" />
</label>

        </div>

        {/* cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRooms.map((room) => (
            <DisplayCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRoomsPage;