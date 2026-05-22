"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const MyBookingListDeletePage = ({ room }) => {

    const route = useRouter()
    const updateHandle = async () => {
        const { data: token } = await authClient.token()
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Cancel it!"
        });

        if (!result.isConfirmed) return;

        try {

            const body = { status: "Cancelled" };
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/usersrooms/${room._id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token?.token}`
                },
                body: JSON.stringify(body)
            });
            const result = await res.json()
            console.log(result);
            if (result.modifiedCount === 1) {
                // success alert
                route.push("/my-booking")
                Swal.fire({
                    title: "Cancelled!",
                    text: "Your file has been Cancelled.",
                    icon: "success"
                });
            }

        } catch (error) {

            Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error"
            });
        }
    }

    return (
        <div>
            <button className='btn flex items-center btn-error' onClick={updateHandle}>

                Cancel</button>
        </div>
    );
};

export default MyBookingListDeletePage;