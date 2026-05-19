"use server"
export const studyRooms=async()=>{
     const res=await fetch(`http://localhost:5000/studyrooms`)
   const rooms=await res.json()
   return rooms
}