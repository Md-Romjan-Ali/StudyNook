import DisplayCard from "@/app/(main)/all-rooms/DisplayCard";
import Link from "next/link";
import ExtraSection from "./AboutRoom";
import HowItWorksSection from "./HowItWork";



const HomePage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/studyrooms?limit=6`,
        {
            cache: "no-store",
        }
    )
    const rooms = await res.json()

    console.log(rooms, 'from home');
    return (
        <div className="max-w-7xl mx-auto px-4">

            {/* HEADER */}
            <div className="flex justify-between items-center pt-20">

                <div>
                    <h1 className="text-4xl font-bold mb-3 text-base-content">
                        Available Study{" "}
                        <span className="text-emerald-500">Rooms</span>
                    </h1>

                    <p className="text-lg font-medium text-base-content/60">
                        Hand-picked rooms recently added to StudyNook
                    </p>
                </div>

                <div>
                    <button className="btn btn-primary text-white">
                        <Link href="/all-rooms">View All Rooms</Link>
                    </button>
                </div>

            </div>

            {/* INFO TEXT */}
            <div className="mt-6">
                <p className="text-sm text-base-content/60">
                    Here are limited rooms{" "}
                    <span className="text-emerald-600 font-bold text-base">
                        {rooms.length}
                    </span>{" "}
                    available now. Click{" "}
                    <span className="text-primary font-semibold">
                        View All
                    </span>{" "}
                    to explore more rooms.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {rooms?.map((room) => (
                    <DisplayCard key={room._id} room={room} />
                ))}
            </div>
            <ExtraSection />
            <HowItWorksSection />
        </div>
    );
};

export default HomePage;