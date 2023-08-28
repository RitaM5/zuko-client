import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import useAdmin from '../../../hooks/useAdmin';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import usePhotographer from '../../../hooks/usePhotographer';
import { motion } from "framer-motion";
const AllPictures = () => {
    const [isAdmin] = useAdmin();
    const [isPhotographer] = usePhotographer();
    const [galleries, setGalleries] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuth();
    axios.get('https://zuko-server.vercel.app/all-galleries')
        .then(res => {
            setGalleries(res.data)
        });

    const handleSelect = galleries => {
        if (disabledButtons.includes(galleries._id)) {
            return;
        }

        setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, galleries._id]);

        const { photographerName, image, price, _id } = galleries;
        if (user && user.email) {
            const selectItem = { id: _id, photographerName, image, price, email: user.email }
            fetch('https://zuko-server.vercel.app/select', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectItem)
            })

                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch(); 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Photo added on the selected page.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }
        else {
            Swal.fire({
                title: 'Please login to select the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className='my-container'>
            <Helmet>
                <title> Zuko | Galleries</title>
            </Helmet>
            <div className='my-32'>
                <h1 className='text-center text-3xl font-poppins font-semibold'>GALLERIES</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14'>
                    {
                        galleries.map((galleries,i) => <>
                            <motion.div 
                            initial={{opacity: 0, translateX:  50, translateY: -50}} animate={{opacity:1, translateX:0, translateY:0}} transition={{duration:0.2, delay: i+0.2}}
                            key={galleries?._id} className={`card w-full bg-base-100 shadow-xl 
                                    `}>
                                <figure className="group">
                                    <img src={galleries?.image} alt="" className="md:h-[300px] w-full object-cover group-hover:scale-110 duration-500" />
                                </figure>
                                <div className="card-body font-poppins text-left text-lg">
                                    <h2 className=" text-left"><span className='font-semibold'>Photographer:</span> {galleries?.photographerName}</h2>
                                    <p><span className='font-semibold'>Price:</span> {galleries?.price}</p>
                                    <div className=' border-b-4 border-gray-400'></div>
                                    <p>{galleries?.details}</p>
                                    {/* <div className="card-actions flex justify-end mt-4">
                                        <button onClick={() => handleSelect(galleries)} disabled={disabledButtons.includes(galleries._id) || isAdmin || isPhotographer} className="btn btn-primary">{isAdmin || isPhotographer ? 'Not Allowed' : 'Select'}</button>
                                    </div> */}
                                    <div className=' border-b-4 border-gray-400'></div>
                                    <div className="card-actions flex justify-end mt-4">
                                        <button className="bg-teal-800 px-3 py-2 rounded-lg text-white">Select</button>
                                    </div>
                                </div>
                            </motion.div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPictures;