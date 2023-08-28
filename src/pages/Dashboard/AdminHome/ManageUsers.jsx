import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakePhotographer = user => {

        fetch(`https://zuko-server.vercel.app/users/photographer/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Photographer Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleMakeAdmin = user => {

        fetch(`https://zuko-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="w-full lg:pr-14">
            <Helmet>
                <title>Zuko | Manage users</title>
            </Helmet>
            <p className='text-center  py-6 text-teal-800 text-2xl font-poppins font-semibold'>Manage Users</p>
            <div className="overflow-x-auto bg-base-100 shadow-lg mt-4">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className='font-poppins text-lg text-white bg-teal-800 font-semibold'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className='font-poppins'>
                                <th>{index + 1}</th>
                                <td><img src={user?.photoURL} alt={user?.name} className="w-10 h-10 rounded-full" /></td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role === 'admin' ? 'admin' : user?.role === 'photographer' ? 'photographer' : 'user'}
                                </td>
                                <td className='inline-flex gap-3'>
                                    <button disabled={user?.role === 'photographer' || user?.role === 'admin' && true} onClick={() => handleMakePhotographer(user)} className="px-4 py-2 rounded-3xl bg-blue-600 text-sm text-white">Photographer</button>
                                    <button disabled={user?.role === 'admin' || user?.role === 'photographer' && true} onClick={() => handleMakeAdmin(user)} className="px-4 py-2 rounded-3xl bg-green-600 text-sm text-white">Admin</button>
                                </td>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;