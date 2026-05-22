import { MdOutlineBolt, MdAccessTime, MdSecurity } from "react-icons/md";

const ExtraSection = () => {
    return (
        <section className="my-20 px-4">

            {/* HEADER */}
            <div className="text-center my-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-base-content">
                    Why Students Choose StudyRoom
                </h2>

                <p className="mt-4 text-base-content/60 max-w-3xl mx-auto text-sm md:text-lg">
                    A smarter way to find, book, and manage study rooms with speed,
                    security, and real-time availability — designed to improve your focus
                    and productivity.
                </p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1 */}
                <div className="bg-base-200 p-6 rounded-2xl border border-base-300 hover:shadow-xl transition hover:-translate-y-2">
                    <MdOutlineBolt className="text-4xl text-indigo-500 mb-3" />
                    <h2 className="text-xl font-bold text-base-content mb-2">
                        Fast Booking System
                    </h2>
                    <p className="text-base-content/60 text-sm">
                        Book your study rooms instantly with a smooth and optimized experience.
                        No delays, no complexity — just quick access.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-base-200 p-6 rounded-2xl border border-base-300 hover:shadow-xl transition hover:-translate-y-2">
                    <MdAccessTime className="text-4xl text-emerald-500 mb-3" />
                    <h2 className="text-xl font-bold text-base-content mb-2">
                        24/7 Availability
                    </h2>
                    <p className="text-base-content/60 text-sm">
                        Check real-time availability anytime and plan your study sessions
                        without restrictions.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-base-200 p-6 rounded-2xl border border-base-300 hover:shadow-xl transition hover:-translate-y-2">
                    <MdSecurity className="text-4xl text-pink-500 mb-3" />
                    <h2 className="text-xl font-bold text-base-content mb-2">
                        Secure & Trusted System
                    </h2>
                    <p className="text-base-content/60 text-sm">
                        Your bookings and personal data are fully protected with authentication
                        and secure handling.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ExtraSection;