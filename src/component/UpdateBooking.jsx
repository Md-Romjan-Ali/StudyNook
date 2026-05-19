"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";

const BookingModal = ({room}) => {
const router=useRouter()
  const [startTime, setStartTime] = useState(1);
  const [endTime, setEndTime] = useState(1);

  const total =
    endTime > startTime
      ? (endTime - startTime) * 5
      : 0;

  const handleBooking =async (e) => {

    e.preventDefault();

    const form = e.target;

    const bookingData = {
      date: form.date.value,
      startTime,
      endTime,
      total,
    };
        console.log(bookingData);
console.log(room._id,'fromfrontent');
        const res=await fetch(`http://localhost:5000/studyrooms/${room._id}`,{
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(bookingData)
        
    })
  const data=await res.json()
    console.log(data);
router.refresh()
    document.getElementById("my_modal_2").close();
  };

  return (
    <div>

      <button
        className=""
        onClick={() =>
          document.getElementById("my_modal_2").showModal()
        }
      >
        Edit
      </button>

      <dialog id="my_modal_2" className="modal">

        <div className="modal-box">

          <form
            onSubmit={handleBooking}
            className="border-2 w-full p-5 rounded-xl"
          >

            <h1 className="text-2xl text-gray-400 font-semibold my-5">
              Update Date & Time
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