import React from 'react';
import weddding from '../../assets/wedding.jpg';
const AboutPage = () => {
    return (
        <div className='lg:flex font-poppins lg:justify-between grid grid-cols-1 lg:gap-16 gap-28  items-center my-8 my-container'>
            <div className='w-full lg:w-[3040px] space-y-7 h-full'>
                <h1 className=' text-3xl font-poppins font-semibold'>ABOUT US</h1>
                <p className='text-lg'>
                    ZUKO combines the classic knowledge of traditional portraiture with an innovative and contemporary style.
                </p>
                <div className=' border-b-4 border-black'></div>
                <div className='text-lg grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div className=' space-y-3'>
                        <h2 className=' font-semibold'>Services</h2>
                        <ul className=' space-y-2'>
                            <li>Fashion Photography</li>
                            <li>Wedding Photography</li>
                            <li>Commercial Shooting</li>
                            <li>Photo Studio</li>
                        </ul>
                    </div>
                    <div>
                        <div className=' space-y-3'>
                            <h2 className='font-semibold'>Awards</h2>
                            <ul className=' space-y-2'>
                                <li>The National Geographic Photo</li>
                                <li>Contest</li>
                                <li>Sony World Photography</li>
                                <li>Monovisions Photography</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:ml-40 w-full md:h-[500px] h-full'>
                <img src={weddding} alt="" className='h-full rounded-md' srcset="" />
            </div>
        </div>
    );
};

export default AboutPage;
