"use server"
export const studyRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/studyrooms`)
  const rooms = await res.json()
  return rooms
}
export const usersrooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/usersrooms`)
  const rooms = await res.json()
  return rooms
}