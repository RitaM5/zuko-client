import React from 'react';
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
       <div className='bg-[#080303] opacity-90 text-white py-16'>
         <div className=' grid grid-cols-1 lg:grid-cols-4 gap-6 my-container'>
            <div className=' space-y-2'>
                <h1 className='text-2xl font-semibold'>ZUKO</h1>
                <p>© ZUKO Photography.</p>
                <p>2021</p>
            </div>
            <div className='text-lg space-y-2'>
                <p>zuko@aheto.com</p>
                <p>(102) 8888 6666</p>
            </div>
            <div className='text-lg space-y-2'>
                <p>Grand Hall - 881 7th Ave</p>
                <p>New York, NY</p>
            </div>
            <div className='text-lg space-y-2'>
                <p>ollow my socials:</p>
                <p className=' inline-flex gap-3 text-2xl'> <FaFacebook /> <FaWhatsapp /> <FaTwitter /></p>
            </div>
        </div>
       </div>
    );
};

export default Footer;