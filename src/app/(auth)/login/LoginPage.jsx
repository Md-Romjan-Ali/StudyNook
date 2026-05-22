"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    const loginHandle = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signIn.email({
            email: user.email, // required
            password: user.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(data, error);
        if (error) {
            toast.error("Invalid email or password")
        }
    }
    const signWithGoogle = async () => {
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
                            Welcome Back
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Login and continue your study journey
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={loginHandle}
                        className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-400 block mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-2xl bg-black border border-gray-700 text-white outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm text-gray-400 block mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-2xl bg-black border border-gray-700 text-white outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full btn py-3 rounded-xl bg-white text-black font-semibold"
                        >
                            Login
                        </button>
                    </form>
                    <div className="divider divider-neutral text-gray-400">
                        OR
                    </div>
                    <button onClick={signWithGoogle} className="btn bg-white rounded-xl w-full text-black border-[#e5e5e5]">
                        <FcGoogle size={25} />
                        Login with Google
                    </button>
                    {/* Register link */}
                    <p className="text-center text-gray-400 mt-6">
                        Don’t have an account?{" "}
                        <Link
                            href="/registration"
                            className="text-white font-semibold hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;