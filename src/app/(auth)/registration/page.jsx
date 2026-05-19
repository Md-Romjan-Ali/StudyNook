"use client"

import Link from "next/link";

const RegistrationPage = () => {
const regiHandle=()=>{
    
}
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-black px-4">
  <div className="w-full max-w-md bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800">
    
    {/* Heading */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white">
        Create Account
      </h1>
      <p className="text-gray-400 mt-2">
        Join and explore your perfect study room
      </p>
    </div>

    {/* Form */}
    <form
    onSubmit={regiHandle}
    className="space-y-5">

      {/* Name */}
      <div>
        <label className="text-sm text-gray-400 block mb-2">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-2xl bg-black border border-gray-700 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm text-gray-400 block mb-2">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-2xl bg-black border border-gray-700 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="text-sm text-gray-400 block mb-2">
          Image URL
        </label>

        <input
          type="text"
          placeholder="Paste your image URL"
          className="w-full px-4 py-3 rounded-2xl bg-black border border-gray-700 text-white outline-none focus:border-blue-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] duration-300"
      >
        Create Account
      </button>
    </form>

    {/* Login link */}
    <p className="text-center text-gray-400 mt-6">
      If you already have an account{" "}
      <Link
        href="/login"
        className="text-white font-semibold hover:underline"
      >
        Login
      </Link>
    </p>
  </div>
</div>
        </div>
    );
};

export default RegistrationPage;