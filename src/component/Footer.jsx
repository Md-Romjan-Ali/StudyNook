import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            StudyRoom
          </h2>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Find and book the perfect study room with comfort, quiet space and modern facilities.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Useful Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-indigo-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-rooms" className="hover:text-indigo-500 transition">
                All Rooms
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Contact
          </h3>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-500" />
              mdromjanali224512@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhone className="text-emerald-500" />
              +880 1234-567890
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">

            <a href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-indigo-500 hover:text-white transition">
              <FaFacebookF />
            </a>

            <a href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-black hover:text-white transition">
              <FaXTwitter />
            </a>

            <a href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white transition">
              <FaLinkedinIn />
            </a>

            <a href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-pink-500 hover:text-white transition">
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200 dark:border-gray-800 text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} StudyRoom. All rights reserved.
      </div>

    </footer>
        </div>
    );
};

export default Footer;