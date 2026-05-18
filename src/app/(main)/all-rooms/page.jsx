
import React from 'react';
import DisplayCard from './DisplayCard';


const AllRoomsPage =async () => {
   const res=await fetch(`http://localhost:5000/studyrooms`)
   const rooms=await res.json()
   
    return (
       <div className='max-w-300 mx-auto'>
<div>
<h1 className='text-4xl font-bold mt-20 '>All Study Rooms</h1>
<p className='text-gray-400 my-5 font-semibold'>Browse the full catalog. filter by aminity, price or Search by name</p>
</div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        <div>
    sdf
</div>
        {/* card */}
          <div className='md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
rooms?.map(room=><DisplayCard key={room._id} room={room}></DisplayCard>)
            }
        </div>
      </div>
       </div>
    );
};

export default AllRoomsPage;