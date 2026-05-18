import DisplayCard from "@/app/(main)/all-rooms/DisplayCard";
import Link from "next/link";



const HomePage =async () => {
 const res=await fetch(`${process.env.SERVER_URI}/studyrooms?limit=2`)
    const rooms=await res.json()

    console.log(rooms,'from home');
    return (
        <div className="max-w-300 mx-auto">
            <div className="flex justify-between items-center pt-20">
               <div>
                 <h1 className="text-4xl font-bold mb-4 ">Available Study <span className="text-green-700">Rooms</span></h1>
                <p className="text-xl font-semibold text-gray-400">Hand-picked rooms recently added to StudyNook</p>
               </div>
                <div>
<button className="btn btn-ghost"><Link href={'/all-rooms'}>View All Rooms</Link></button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    rooms?.map(room=><DisplayCard key={room._id} room={room}></DisplayCard>)
                }
            </div>
        </div>
    );
};

export default HomePage;