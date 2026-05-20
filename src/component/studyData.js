"use server"
export const studyRooms=async()=>{
     const res=await fetch(`http://localhost:5000/studyrooms`)
   const rooms=await res.json()
   return rooms
}
export const usersrooms=async()=>{
     const res=await fetch(`http://localhost:5000/usersrooms`)
   const rooms=await res.json()
   return rooms
}