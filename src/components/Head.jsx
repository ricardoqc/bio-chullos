import React from 'react';
import Site_Logo from '../assets/site_imgs/logo.png';
import hero_header from '../assets/catalog/cusco3.jpg';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok, FaTripadvisor } from "react-icons/fa";

export const Head = () => {
    return (
        <div>
            <div className='header'>
                <div className="hero-header">
                    <picture>
                        <img src={hero_header} alt="" />
                    </picture>
                </div>
                <div className="brand">
                    <picture>
                        <img src={Site_Logo} alt="" />
                    </picture>
                </div>
            </div>
            <div className='title_section'>
                <span className='subtitle'>Experiencias</span>
                <span className='main_title'>Inolvidables</span>
            </div>
            <div className="social-links">
                <p>Social Links:</p>
                <ul className='links'>
                    <li><a href="https://www.facebook.com/ChullosTours" target='_blank'><FaFacebookF /></a></li>
                    <li><a href="https://www.instagram.com/chullostoursperu/" target='_blank'><FaInstagram /></a></li>
                    <li><a href="https://www.tiktok.com/@chullostours.com" target='_blank'><FaTiktok /></a></li>
                    <li><a href="https://www.tripadvisor.es/Attraction_Review-g294314-d26719669-Reviews-Chullos_Tours-Cusco_Cusco_Region.html" target='_blank'><FaTripadvisor /></a></li>
                </ul>
            </div>
        </div>
    )
}