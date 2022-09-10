import React from 'react'
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaHome,
    FaInstagram,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
    FaTwitter,
    FaWhatsapp,
    FaYoutube
} from 'react-icons/fa';
import './footer.css';
const Footer = () => {
    return (
        <div className=' footer text-black w-full bg-[#e6e7e9]  m-auto'>
            <div className=' footer-contact bg-[#d1d2d4] p-5'>
                <div className=' content flex  justify-center items-center '>
                    <FaPhone size={20} style={{ marginRight: "2rem" }} />
                    <div className=' flex flex-col'>
                        <p className=' text-sm font-medium'>Contact our sales</p>
                        <p className=' font-extrabold text-2xl'> 051 111 222 333</p>
                    </div>

                </div>
                <div className=' content flex  justify-center items-center  '>
                    <FaPhone size={20} style={{ marginRight: "2rem" }} />
                    <div className=' flex flex-col'>
                        <p className=' text-sm font-medium'>email us</p>
                        <p className=' font-extrabold text-2xl'> info@tabcity.com.pk</p>
                    </div>

                </div>
                <div className=' content flex  justify-center items-center '>
                    <FaPhone size={20} style={{ marginRight: "2rem" }} />
                    <div className=' flex flex-col'>
                        <p className=' text-sm font-medium'>visit our website</p>
                        <p className=' font-extrabold text-2xl'> www.tabcity.com.pk</p>
                    </div> </div>
            </div>

            <div className='footer-container flex flex-col justify-center items-center' >
                <div>
                    <h1 className=' font-extrabold text-2xl mt-4 '> Follow Us</h1>
                </div>
                <span className='bar'> </span>

                <div className='social flex'>

                    <FaTwitter size={35} style={{ marginRight: "1rem" }} />
                    <FaInstagram size={35} style={{ marginRight: "1rem" }} />
                    <FaWhatsapp size={35} style={{ marginRight: "1rem" }} />
                    <FaYoutube size={35} style={{ marginRight: "1rem" }} />
                    <FaFacebook size={35} style={{ marginRight: "1rem" }} />
                    <FaLinkedin size={35} style={{ marginRight: "1rem" }} />
                </div>
                <div className=' flex mt-10  text-xl font-medium'>
                    <Link to="#" className='mr-3'> Terms of Services</Link>|
                    <Link to="#" className='mr-3 ml-3'> Privacy Policy</Link>|
                    <Link to="#" className=' mr-3 ml-3'> FAQs</Link>
                </div>
                <div className='flex flex-col text-center text-lg sm:text-center mt-3'>
                    <span class="block  ">
                        Copyrights 2021 ©  <a href="www.tabcity.com.pk" class="hover:underline">Tab City</a>-Islamabad, All Rights Reserved. </span>
                    Designed & Developed by Swismax Solutions
                </div>

            </div>
        </div>
    )
}

export default Footer