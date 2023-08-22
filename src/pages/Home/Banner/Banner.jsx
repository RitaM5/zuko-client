import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/banner-1.jpg';
import img2 from '../../../assets/banner-2.jpg';
import img3 from '../../../assets/banner-3.jpg';


const Banner = () => {
    return (
        <Carousel
        showStatus={false} 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={3000} 
        stopOnHover={true}
         preventMovementUntilSwipeScrollTolerance={true} and swipeScrollTolerance={50}>
            <div>
                <img src={img1}/>
                <div className="flex text-left w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='lg:px-36 '>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" data-aos-duration="1000" className=' text-white ml-2 space-y-5 w-full p-4 '>
                            <h2 className='text-5xl space-x-3 font-poppins'>
                                <span className='text-pink-500'>#</span>4 Language Learning Website<br />and App for Students
                            </h2>
                            <p className='w-1/2 font-poppins text-lg'>Online language learning games, videos, songs, books, worksheets and flashcards for students.!</p>
                            <button className="bg-pink-600 px-3 py-2 rounded-md">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={img2} />
                <div className="flex text-left w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='lg:px-36'>
                        <div className='text-white ml-2 space-y-5 w-full p-4 '>
                            <h2 className='text-5xl space-x-3 font-poppins'>
                                <span className='text-pink-500'>#</span>4 Language Learning Website<br />and App for Kids
                            </h2>
                            <p className='w-1/2  font-poppins text-lg'>Online language learning games, videos, songs, books, worksheets and flashcards for children.!</p>
                            <button className="bg-pink-600 px-3 py-2 rounded-md">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={img3} />
                <div className="flex text-left w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                    <div className='lg:px-36'>
                        <div className='text-white ml-2 space-y-5 w-full p-4 '>
                            <h2 className='text-5xl space-x-3 font-poppins'>
                                <span className='text-pink-500'>#</span>4 Language Learning Website<br />and App for Students
                            </h2>
                            <p className='w-1/2 font-poppins text-lg'>Teachers love Dinolingo reporting tools !!</p>
                            <button className="bg-pink-600 px-3 py-2 rounded-md">Know More</button>
                        </div>
                    </div>
                </div>
            </div>

        </Carousel>
    );
};

export default Banner;