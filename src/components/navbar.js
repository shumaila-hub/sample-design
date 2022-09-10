import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './navbar.css';
import { FaBars, FaTimes, FaPhone, FaMailBulk, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [click, Setclick] = useState(false);
  const handleclick = () => Setclick(!click);

  const [color, Setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      Setcolor(true);
    }
    else {
      Setcolor(false)
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
<div className=' bg-img' >

<div className={color ? "header header-bg" : "header"}>
      <Link to="/" >
        <img className=' flex h-20 ' src={logo} />
      </Link>
      <div>
        <div className=' xl:flex 2xl:flex lg:flex hidden text-black ml-28  mt-2 items-center'>
          <div>
            <FaPhone size={20} style={{ marginRight: "0.5rem" }} />
          </div>

          <div>
            051 111 222 333
          </div>
          <div className=' flex ml-4'>

            <FaMailBulk size={20} style={{ marginRight: "0.5rem" }} />
            kshumailakhan612@gmail.com


          </div>
          <div className=' flex ml-4'>
            <FaInstagram size={20} style={{ marginRight: "1rem" }} />
            <FaWhatsapp size={20} style={{ marginRight: "1rem" }} />
            <FaYoutube size={20} style={{ marginRight: "1rem" }} />
            <FaFacebook size={20} style={{ marginRight: "1rem" }} />
          </div>
          <Link to="#"> <button className='nav-btn1 rounded-xl bg-slate-200'> Dealer Portal </button></Link>

          
        </div>
        <div className=' border-b-2 border-b-gray-300 pt-1 pb-1'>
          
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"} >
          <li className=' pr-4'>
            <Link className=' nav-links font-medium text-lg uppercase' to="/"> Home </Link>
          </li>
          <li className=' pr-4'>
            <Link className=' nav-links font-medium text-lg uppercase' to="/about"> About Us </Link>
          </li>
          <li className=' pr-4'>
            <Link className='nav-links font-medium text-lg uppercase' to="/pricing"> Pricing</Link></li>
          <li className=' pr-4'>
            <Link className='nav-links font-medium text-lg uppercase' to="/feactures"> feactures </Link></li>
          <li className=' pr-4'>
            <Link className='nav-links font-medium text-lg uppercase' to="/media"> media </Link></li>
          <li className=' pr-4'>
            <Link className='nav-links font-medium text-lg uppercase' to="/download"> download  </Link></li>
          <li className=' pr-4'>
            <Link className='nav-links font-medium text-lg uppercase' to="/career"> career </Link></li>
          <li className=' pr-4'>
            <Link className='nav-links font-medium text-xl uppercase' to="/contact"> <button className='nav-btn rounded-xl'>
              Contact Us
            </button> </Link>
          </li>
        </ul>
      </div>

      <div className=' cross-icon ' onClick={handleclick}>
        {click ? (<FaTimes className=' text-2xl text-[#1076bd]' />)
          : (<FaBars className=' text-2xl text-[#1076bd]' />)}


      </div>
    </div>
  </div>

    </>
  )
}

export default Navbar