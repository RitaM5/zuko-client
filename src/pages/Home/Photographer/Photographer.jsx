import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Photographer = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: photographers = [], refetch } = useQuery(['all-photographers'], async () => {
        const res = await axiosSecure.get('/all-photographers')
        return res.data;
    })
    return (
        <div className=''>
            <Helmet>
                <title> Zuko | Photographers</title>
            </Helmet>
            <h1 className='text-3xl font-semibold text-center'>PHOTOGRAPHERS</h1>
            <div className='my-container'>
          
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },

                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        }
                    }}
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    className='mySwiper mt-12 rounded-box min-h-screen items-center justify-center bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        photographers.map(photographer => (
                            <SwiperSlide className="group card w-full mt-12 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div className="">
                                    <img className="h-[400px] w-full object-cover group-hover:scale-110 duration-500" src={photographer?.photoURL} alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute text-left inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 transition-all duration-1000 group-hover:translate-y-0">
                                    <h1 className="font-dmserif text-3xl font-bold text-white mb-6">{photographer?.name}</h1>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Photographer;