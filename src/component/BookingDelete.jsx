"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const DeleteBooking = ({room}) => {
    const route=useRouter()
    const DeleteHandle=async()=>{
        // const res=await fetch(`${process.env.SERVER_URI}/studyrooms/${room._id}`)
          const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  });


  if (!result.isConfirmed) return;

  try {

    const res = await fetch(`http://localhost:5000/studyrooms/${room._id}`, {
      method: "DELETE"
    });
    const result=await res.json()
    console.log(result);
if(result.deletedCount==1){
 // success alert
 route.push("/")
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
}
   

  } catch (error) {

    Swal.fire({
      title: "Error!",
      text: error.message,
      icon: "error"
    });

  }
    }
          
    return (
        <div>
<button onClick={DeleteHandle}>Delete</button>
        </div>
    );
};

export default DeleteBooking;