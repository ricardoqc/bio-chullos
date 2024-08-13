import React from 'react';
import Site_Logo from '../assets/site_imgs/logo.png';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok, FaTripadvisor } from "react-icons/fa";

export const Head = () => {
    return (
        <div>
            <div className="brand">
                <picture>
                    <img src={Site_Logo} alt="" />
                </picture>
            </div>
            <div className='title_section'>
                <span className='subtitle'>Experiencias</span>
                <span className='main_title'>Inolvidables</span>
            </div>
            <div className="social-links">
                <p>Social Links:</p>
                <ul className='links'>
                    <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                    <li><a href="https://twitter.com"><FaWhatsapp /></a></li>
                    <li><a href="https://instagram.com"><FaInstagram /></a></li>
                    <li><a href="https://instagram.com"><FaTiktok /></a></li>
                    <li><a href="https://instagram.com"><FaTripadvisor /></a></li>
                </ul>
            </div>
        </div>
    )
}