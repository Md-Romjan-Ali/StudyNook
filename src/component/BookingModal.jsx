"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingModal = ({ room }) => {
  const router = useRouter()
  const [startTime, setStartTime] = useState(1);
  const [endTime, setEndTime] = useState(1);

  const total =
    endTime > startTime
      ? (endTime - startTime) * 5
      : 0;
  const { data: session } = authClient.useSession()
  const userId = session?.user?.id
  const handleBooking = async (e) => {
    e.preventDefault();

    toast.success('Room Booking success')

    const form = e.target;
    const bookingData = {
      date: form.date.value,
      startTime,
      endTime,
      total,
    };
    const { data: token } = await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/studyrooms/${room._id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token?.token}`
      },
      body: JSON.stringify(bookingData)

    })
    const data = await res.json()
    const { _id, ...userBooking } = room

    const user = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/usersrooms`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token?.token}`
      },

      body: JSON.stringify({
        ...userBooking,
        ...bookingData,
        userId,
        status: 'Confirmed'
      })
    })
    const userData = await user.json()

    router.refresh()
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>

      <button
        className="btn btn-success btn-outline w-full"
        onClick={() =>
          document.getElementById("my_modal_1").showModal()
        }
      >
        Book Now
      </button>

      <dialog id="my_modal_1" className="modal">

        <div className="modal-box">

          <form
            onSubmit={handleBooking}
            className="border-2 w-full p-5 rounded-xl"
          >

            <h1 className="text-2xl text-gray-400 font-semibold my-5">
              Add Date & Time
            </h1>

            {/* date */}
            <div className="form-control mb-4">

              <label className="label">
                <span className="label-text">
                  Date
                </span>
              </label>

              <input
                type="date"
                required
                name="date"
                className="input input-bordered w-full"
              />

            </div>

            {/* time */}
            <div className="grid grid-cols-2 gap-4">

              {/* start */}
              <div>

                <label className="label">
                  <span className="label-text">
                    Start Time
                  </span>
                </label>

                <select
                  className="select select-bordered w-full"
                  value={startTime}
                  required
                  onChange={(e) =>
                    setStartTime(Number(e.target.value))
                  }
                >
                  {
                    Array.from({ length: 24 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))
                  }
                </select>

              </div>

              {/* end */}
              <div>

                <label className="label">
                  <span className="label-text">
                    End Time
                  </span>
                </label>

                <select
                  className="select select-bordered w-full"
                  value={endTime}
                  required
                  onChange={(e) =>
                    setEndTime(Number(e.target.value))
                  }
                >
                  {
                    Array.from({ length: 24 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>
            {/* total */}
            <div className="mt-5 text-center">
              <h2 className="text-2xl font-bold text-success">
                Total Price: ${total}
              </h2>
            </div>
            <button
              type="submit"
              className="btn btn-success w-full mt-5"
            >
              Book
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookingModal;