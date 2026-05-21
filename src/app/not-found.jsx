import Link from "next/link";
import { MdOutlineSearchOff } from "react-icons/md";

export default function NotFound() {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-base-100">

            {/* icon */}
            <div className="text-6xl text-indigo-500 mb-4">
                <MdOutlineSearchOff />
            </div>

            {/* title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-base-content">
                404 - Page Not Found
            </h1>

            {/* description */}
            <p className="mt-4 text-base-content/60 max-w-md">
                Oops! The page you are looking for doesn’t exist or has been moved.
                Please check the URL or go back to home.
            </p>

            {/* buttons */}
            <div className="flex gap-4 mt-6">

                <Link
                    href="/"
                    className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition"
                >
                    Go Home
                </Link>
            </div>

        </div>
    );
}