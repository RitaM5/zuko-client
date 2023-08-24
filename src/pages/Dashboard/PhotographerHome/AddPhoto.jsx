import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddPhoto = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { photographerName, photographerEmail, details, price, } = data;
                    const newItem = { photographerName, photographerEmail, details, price: parseFloat(price), status: "pending", feedback: "", bought: 0, image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/galleries', newItem)
                        .then(data => {
                            console.log('after posting new class', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };
    return (
        <div className='w-full'>
            <Helmet>
                Zuko | Add New Photo
            </Helmet>
            <p className='text-center  py-4 text-teal-800 text-2xl font-poppins font-semibold'>Add New Photo</p>
            <div className='w-full px-2'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2 md:mx-auto px-4 py-10 rounded-lg bg-base-200'>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Photographer Name</span>
                        </label>
                        <input type="text" placeholder="class name"
                            {...register("className", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold"> Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <div className="flex gap-2 my-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Photographer Email</span>
                            </label>
                            <input type="email" placeholder="instructor email"
                                {...register("instructorEmail", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Details</span>
                        </label>
                        <textarea
                            placeholder="Details"
                            {...register("details", { required: true, maxLength: 500 })}
                            className="input input-bordered h-[150px] w-full"
                        />
                      
                    </div>
                    <input className=" w-1/2 rounded-lg flex justify-center mx-auto mt-4 bg-teal-800 py-2 text-white" type="submit" value="Add Photo" />
                </form>
            </div>
        </div>
    );
};

export default AddPhoto;