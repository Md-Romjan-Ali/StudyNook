
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage =async () => {
   const session  = await auth.api.getSession({
    headers: await headers()
   })
    const userId=session?.user.id

    const userBookingReq=await fetch(`http://localhost:5000/usersrooms/${userId}`)
    const userBookingData= await userBookingReq.json()
  
    return (
        <div className="max-w-300 mx-auto">
<div className="mt-10 mb-5 space-y-4">
    <h1 className="text-3xl font-bold text-gray-300">My Bookings</h1>
    <p className="text-xl font-semibold text-gray-400">Manage you upcoming and past room reservation</p>
</div>

        <div className="overflow-x-auto rounded-2xl border border-base-300">
  <table className="table w-full bg-base-100 min-w-[900px]">
    <thead className="bg-base-200">
      <tr>
        <th className="px-4 md:px-6 py-4 text-left">Room</th>
        <th className="px-4 md:px-6 py-4 text-left">Date</th>
        <th className="px-4 md:px-6 py-4 text-left">Time</th>
        <th className="px-4 md:px-6 py-4 text-left">Total Cost</th>
        <th className="px-4 md:px-6 py-4 text-left">Status</th>
        <th className="px-4 md:px-6 py-4 text-left">Action</th>
      </tr>
    </thead>

    <tbody>
      {userBookingData?.map((room) => (
        <tr
          key={room._id}
          className="
            border-t border-base-300
            hover:bg-base-200/40
            transition
          "
        >
          {/* ROOM */}
          <td className="px-4 md:px-6 py-4">
            <div className="flex items-center gap-3 md:gap-4">
              <Image
              width={80}
              height={80}
                src={room.image}
                alt={room.name}
                className="
                  w-12 h-12
                  md:w-16 md:h-16
                  rounded-2xl
                  object-cover
                "
              />
              <div>
                <h2 className="font-semibold text-sm md:text-base">
                  {room.name}
                </h2>

                <p className="text-xs md:text-sm text-base-content/60">
                  Floor {room.floor}
                </p>
              </div>

            </div>
          </td>

          {/* DATE */}
          <td className="px-4 md:px-6 py-4">
            <div className="flex flex-col">
              
              <span className="font-medium text-sm md:text-base">
                {room.date}
              </span>

              <span className="text-xs text-base-content/50">
                Booking Date
              </span>

            </div>
          </td>

          {/* TIME */}
          <td className="px-4 md:px-6 py-4">
            <div className="flex items-center gap-1 md:gap-2 text-sm md:text-base font-medium">
              
              <span>{room.startTime}</span>

              <span className="text-primary">
                -
              </span>

              <span>{room.endTime}</span>

            </div>
          </td>

          {/* COST */}
          <td className="px-4 md:px-6 py-4">
            <div
              className="
                inline-flex items-center
                rounded-xl
                bg-primary/10
                text-primary
                px-3 md:px-4
                py-1.5 md:py-2
                text-sm md:text-base
                font-bold
              "
            >
              ${room.total}
            </div>
          </td>

          {/* STATUS */}
          <td className="px-4 md:px-6 py-4">
            {
                room.status==="confirmed" ? 
                <span
              className={`
                px-3 md:px-4
                py-1.5
                rounded-full
                text-xs md:text-sm
                font-semibold
                bg-emerald-500/15 text-emerald-500`}
            >
                Confirmed
            </span>
                :
<span
              className={`
                px-3 md:px-4
                py-1.5
                rounded-full
                text-xs md:text-sm
                font-semibold
                bg-rose-500/15 text-rose-500`}
            >
                Cancelled
       
            </span>
            }
            
          </td>

          {/* ACTION */}
          <td className="px-4 md:px-6 py-4">
            {room.status === "confirmed" ? (
              
              <button
                className="
                  px-3 md:px-4
                  py-2
                  rounded-xl
                  bg-rose-500 hover:bg-rose-600
                  text-white
                  text-xs md:text-sm
                  font-medium
                  transition
                "
              >
                Cancel
              </button>

            ) : (
              
              <div
                className=" text-4xl font-semibold"
              >
                -
              </div>

            )}
          </td>
        </tr>
      ))}
    </tbody>

  </table>
</div>
        </div>
    );
};

export default MyBookingPage;