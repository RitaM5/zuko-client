import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [detailsValue, setDetailsValue] = useState('');
    const [priceValue, setPriceValue] = useState('')
    const [selectedPhotoId, setSelectedPhotoId] = useState(null);
    const [axiosSecure] = useAxiosSecure();
    const { data: photographerPhoto = [], refetch } = useQuery(['photographerPhoto'], async () => {
        const res = await axiosSecure.get('/my-galleries')
        return res.data;
    });

    const handleOpenModal = (item) => {
        setSelectedPhotoId(item._id);
        setDetailsValue(item.details);
        setPriceValue(item.price);
        setIsOpen(true);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const details = form.details.value;
        const updatedClassData = {
            details: details,
            price: parseInt(price),

        };

        fetch(`https://zuko-server.vercel.app/galleries/update/${selectedPhotoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedClassData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Update Successfully.',
                        showConfirmButton: false,
                        timer: 1500

                    });
                    setIsOpen(false);
                    refetch();
                }
            })
    };

    return (
        <div className='px-6 w-full mb-16 py-6'>
            <Helmet>
                <title>Zuko | My Gallery</title>
            </Helmet>
            <h3 className="text-2xl font-poppins text-center text-teal-800 underline underline-offset-8 font-semibold py-4">My Gallery</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-4'>
                {
                    photographerPhoto.map(item => <>
                        <div key={item?._id} className="font-poppins card w-full bg-base-100 shadow-xl">
                            <figure className=" group">
                                <img src={item?.image} alt="" className=" w-full h-[250px] object-cover group-hover:scale-110 duration-500" />
                            </figure>
                            <div className="card-body text-left text-lg">
                                <h1><span className='font-semibold'>Photographer:</span> {item.photographerName}</h1>
                                <h2><span className='font-semibold'>Price:</span> ${item.price}</h2>
                                <p>{item.details}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleOpenModal(item)} className="bg-teal-800 text-white px-3 my-3 py-2 rounded-lg">Update</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-2xl font-semibold font-poppins leading-6 text-gray-900">
                                    Update Photo
                                </Dialog.Title>
                                <form onSubmit={handleSubmit}>
                                    <div className="my-6 form-control">
                                        <label htmlFor="seats" className="block text-left font-poppins text-lg font-medium text-gray-700">
                                            Details:
                                        </label>
                                        <textarea
                                            id="details"
                                            defaultValue={detailsValue}
                                            name="details"
                                            className="mt-2 pl-3 p-2 bg-gray-200 w-[400px] font-poppins  h-[150px] border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 font-medium"
                                        />
                                    </div>
                                    <div className="mt-2 form-control">
                                        <label htmlFor="price" className="block text-left text-lg font-poppins font-medium text-gray-700">
                                            Price
                                        </label>
                                        <input
                                            id="price"
                                            type="number"
                                            defaultValue={priceValue}
                                            name="price"
                                            className="mt-2 pl-3 p-2 bg-gray-200 font-poppins block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-5">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center w-1/2 px-4 py-2 font-medium text-white bg-teal-800 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                                        >
                                            Update
                                        </button>

                                    </div>
                                </form>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex  justify-center w-1/2 px-4 py-2 mt-3 font-medium text-white bg-red-400 border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>

        </div>
    );
};

export default MyGallery;