"use client"


import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const RegistrationPage = () => {
  const [error, setError] = useState("");
  const regiHandle = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData.entries())
    console.log(user);
    const password = user.password;
    // password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters and include uppercase & lowercase letters."
      );
      return;
    }
    setError("");
    // submit logic here
    console.log(password);
    const { data, error } = await authClient.signUp.email({
      name: user.name, // required
      email: user.email, // required
      password: user.password, // required
      image: user.image,

    });
    console.log(data, error);


    redirect('/login')
  }

  const signUpWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
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
                name="name"
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
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-2xl bg-black border border-gray-700 text-white outline-none focus:border-blue-500"
              />
            </div>
            {/* password */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Type your password"
                className="w-full px-4 py-3 rounded-2xl bg-black border border-gray-700 text-white outline-none focus:border-blue-500"
                required
              />

              {/* inline error */}
              {error && (
                <p className="text-red-500 text-sm mt-2">
                  {error}
                </p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Image URL
              </label>

              <input
                type="text"
                name="image"
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
          <div className="divider divider-neutral text-gray-400">
            OR
          </div>
          <button onClick={signUpWithGoogle} className="btn bg-white rounded-xl w-full text-black border-[#e5e5e5]">
            <FcGoogle size={25} />
            SginUp with Google
          </button>
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