
import Image from "next/image";
import DisplayCard from "../DisplayCard";
import { FaEdit, FaTrash } from "react-icons/fa";
import BookingModal from "@/component/BookingModal";
import DeleteBooking from "@/component/BookingDelete";
import UpdateBooking from "@/component/UpdateBooking";

const DetailsRoom =async ({params}) => {
    const {id}=await params
    const res=await fetch(`http://localhost:5000/studyrooms/${id}`)
    const room=await res.json()
   const { floor,total,capacity_min} = room;

    return (
        <div className="max-w-300 mx-auto pt-10 sm:px-10">

          <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
            <div className="col-span-2">
             <DisplayCard room={room}/>
          </div>
          <div className="col-span-2">
              <div className=" border  shadow-lg rounded-xl p-4 relative">

      {/* price top */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-red-600">${total || 0}</h2>
        <span className="text-green-600 font-bold">Total Cost</span>
      </div>

      {/* floor + booking */}
      <div className="mt-3 space-y-2 flex flex-col text-sm">
        <span>{floor} Floor</span>
        <span>0 Total Booking</span>
        <span>{capacity_min} Up to people</span>
      </div>

      {/* book button */}
      <div className="mt-4">
           <BookingModal room={room}/>
      </div>
    

      {/* edit && delete */}
      <div className="flex gap-3 mt-3 justify-center">

        <div className="btn w-[48%] btn-outline  flex items-center gap-2">
          <FaEdit /> <UpdateBooking room={room}/>
        </div>

        <div className="btn btn-error  w-[48%] flex items-center gap-2 text-white">
          <FaTrash /> <DeleteBooking room={room}/>
        </div>

      </div>

    </div>
    <div className=" mt-5 ">
    <h1 className="text-xl font-semibold mb-2">Listed by</h1>
<div className="flex border-2 border-red-600 rounded-xl shadow-2xl gap-5 items-center p-5 ">
     <div>
        img
     </div>
   <div>
     <h1>romjan</h1>
    <p>email</p>
   </div>
</div>
</div>
          </div>
 
          </div>
        </div>
    );
};

export default DetailsRoom;