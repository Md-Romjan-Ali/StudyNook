import {
    MdSearch,
    MdEventSeat,
    MdCheckCircle,
    MdOutlinePayments,
} from "react-icons/md";

const HowItWorksSection = () => {
    return (
        <div className="my-20 px-4">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                    How StudyRoom Works
                </h2>
                <p className="text-base-content/60 mt-2">
                    Simple steps to book your perfect study space
                </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

                {/* line connector (desktop only) */}
                <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-base-300 z-0"></div>

                {/* Step 1 */}
                <div className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-xl transition relative z-10 text-center">
                    <MdSearch className="text-4xl text-indigo-500 mx-auto mb-3" />
                    <h3 className="font-bold text-lg">Find Room</h3>
                    <p className="text-sm text-base-content/60 mt-2">
                        Search available study rooms based on your needs.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-xl transition relative z-10 text-center">
                    <MdEventSeat className="text-4xl text-emerald-500 mx-auto mb-3" />
                    <h3 className="font-bold text-lg">Choose Slot</h3>
                    <p className="text-sm text-base-content/60 mt-2">
                        Pick your preferred time and capacity.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-xl transition relative z-10 text-center">
                    <MdOutlinePayments className="text-4xl text-yellow-500 mx-auto mb-3" />
                    <h3 className="font-bold text-lg">Confirm Booking</h3>
                    <p className="text-sm text-base-content/60 mt-2">
                        Secure your booking instantly with confirmation.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-xl transition relative z-10 text-center">
                    <MdCheckCircle className="text-4xl text-pink-500 mx-auto mb-3" />
                    <h3 className="font-bold text-lg">Start Studying</h3>
                    <p className="text-sm text-base-content/60 mt-2">
                        Enjoy your distraction-free study environment.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default HowItWorksSection;