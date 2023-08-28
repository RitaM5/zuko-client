import React from 'react';
import Banner from '../Banner/Banner';
import AboutPage from '../../Shared/AboutPage';
import AllPictures from '../Gallery/AllPictures';
import ContactPage from '../Contact/ContactPage';
import bgImage from '../../../assets/photo-1.jpg'
import { Parallax } from 'react-parallax';
import Photographer from '../Photographer/Photographer';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutPage></AboutPage>
            <AllPictures></AllPictures>
            <div className='my-44 my-container font-poppins'>
                <h1 className='my-8 text-3xl font-semibold'>OUR PROCESS</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-16'>
                    <div className='group'>
                        <img className='object-cover group-hover:scale-110 duration-500' src="https://n.foxdsgn.com/zuko/wp-content/uploads/2021/04/Frame-153-1-1024x579.jpg" alt="" srcset="" />
                    </div>
                    <div className=' relative lg:top-52 top-10 space-y-4'>
                        <h2 className=' text-[26px]'>01.</h2>
                        <div className=' border-b-2 border-black'></div>
                        <p className='text-[26px] font-semibold'>ARTWORK PLANNING</p>
                        <p className=' text-lg'>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-16 lg:my-80 my-20'>
                    <div className=' space-y-4 lg:order-1 order-2 lg:mt-0 mt-16'>
                        <h2 className=' text-[26px]'>02.</h2>
                        <div className=' border-b-2 border-black'></div>
                        <p className='text-[26px] font-semibold'>PHOTO SESSION</p>
                        <p className=' text-lg'>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </p>
                    </div>
                    <div className='group relative lg:top-44 top-10 lg:order-2 order-1'>
                        <img className='object-cover group-hover:scale-110 duration-500' src="https://n.foxdsgn.com/zuko/wp-content/uploads/2021/04/Frame-125-1-1024x579.jpg" alt="" srcset="" />
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-16'>
                    <div className='group'>
                        <img className='object-cover group-hover:scale-110 duration-500' src="https://n.foxdsgn.com/zuko/wp-content/uploads/2021/04/Frame-148-1-1024x579.jpg" alt="" srcset="" />
                    </div>
                    <div className=' relative lg:top-52 top-10 space-y-4'>
                        <h2 className=' text-[26px]'>03.</h2>
                        <div className=' border-b-2 border-black'></div>
                        <p className='text-[26px] font-semibold'>ARTWORK SELECTION</p>
                        <p className=' text-lg'>
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-container md:mt-96'>
                <Photographer></Photographer>
            </div>
            <div className='my-container lg:my-0 '>
                <h1 className='text-2xl font-semibold'>Pricing Plans</h1>
                <h2 className=' text-2xl font-semibold mt-3'>TAKE A LOOK AT MY PACKAGES</h2>
                <div className='lg:flex lg:justify-between gap-8 lg:items-center'>
                    <div className=' space-y-3 '>
                        <h3 className='mt-3 text-[20px]'>BASIC</h3>
                        <p className='lg:w-[600px] text-lg'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil impedit quo.</p>
                    </div>
                    <p className='my-2 lg:my-0 text-2xl font-semibold'>$ 300</p>
                    <p className='text-2xl font-semibold'>buy now</p>
                </div>
                <div className=' border-b-2 border-black my-3'></div>
                <div className='lg:flex lg:justify-between gap-8 lg:items-center my-8'>
                    <div className=' space-y-3 '>
                        <h3 className='mt-3 text-[20px]'>STANDART</h3>
                        <p className='lg:w-[600px] text-lg'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil impedit quo.</p>
                    </div>
                    <p className='my-2 lg:my-0 text-2xl font-semibold'>$ 600</p>
                    <p className='text-2xl font-semibold'>buy now</p>
                </div>
                <div className=' border-b-2 border-black my-3'></div>
                <div className='lg:flex lg:justify-between gap-8 lg:items-center my-8'>
                    <div className=' space-y-3 '>
                        <h3 className='mt-3 text-[20px]'>PREMIUM</h3>
                        <p className='lg:w-[600px] text-lg'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil impedit quo.</p>
                    </div>
                    <p className='my-2 lg:my-0 text-2xl font-semibold'>$ 900</p>
                    <p className='text-2xl font-semibold'>buy now</p>
                </div>
            </div>
            <div className='lg:py-36'>
                <Parallax strength={600} bgImage={bgImage} className=" w-full h-[650px] relative opacity-80 "
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0" >
                        <div className="absolute inset-0  my-32 text-teal-800">
                            <p className='text-3xl md:text-5xl text-center font-semibold flex justify-center items-center'>
                                NEED A PHOTOGRAPHER ? SOMEONE WITH EXPERIENCE TO COLLABORATE WITH?
                            </p>
                            <span className='flex justify-center items-center text-[26px] mt-6'>Contact Us</span>
                        </div>
                    </div>
                </Parallax>
                <ContactPage></ContactPage>
            </div>
        </div>
    );
};

export default Home;