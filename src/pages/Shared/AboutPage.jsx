import React from 'react';
import weddding from '../../assets/wedding.jpg';
import Fade from 'react-reveal/Fade';
const AboutPage = () => {
    return (
        <div className='lg:flex font-poppins lg:justify-between grid grid-cols-1 lg:gap-16 gap-28  items-center my-16 my-container'>
            <div className='w-full lg:w-[3040px] space-y-7 h-full'>
                <h1 className=' text-3xl font-poppins font-semibold'>ABOUT US</h1>
                <Fade bottom duration={1000}>
                    <p className='text-lg'>
                        ZUKO combines the classic knowledge of traditional portraiture with an innovative and contemporary style.
                    </p>
                </Fade>
                <div className=' border-b-4 border-black'></div>
                <div className='text-lg grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <Fade bottom duration={1000}>
                        <div className=' space-y-3'>
                            <h2 className=' font-semibold'>Services</h2>
                            <ul className=' space-y-2'>
                                <li>Fashion Photography</li>
                                <li>Wedding Photography</li>
                                <li>Commercial Shooting</li>
                                <li>Photo Studio</li>
                            </ul>
                        </div>
                    </Fade>
                    <div>
                        <Fade bottom duration={1000}>
                            <div className=' space-y-3'>
                                <h2 className='font-semibold'>Awards</h2>
                                <ul className=' space-y-2'>
                                    <li>The National Geographic Photo</li>
                                    <li>Contest</li>
                                    <li>Sony World Photography</li>
                                    <li>Monovisions Photography</li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className='lg:ml-40 w-full md:h-[500px] h-full group'>
                {/* <img src={weddding} alt="" className='h-full rounded-md object-cover group-hover:scale-110 duration-500' srcset="" /> */}
                <img className='h-full w-full rounded-md object-cover group-hover:scale-110 duration-500' src="https://n.foxdsgn.com/zuko/wp-content/uploads/2021/03/Rectangle-70.jpg" alt="" srcset="" />
            </div>
        </div>
    );
};

export default AboutPage;
