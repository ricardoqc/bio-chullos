import React from 'react';
import { BsSuitcase2 } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

export const Buttons = () => {
    const buttonsData = [
        { href: "https://chullostours.com/", icon: <TbWorld />, text: "Pagina Web" },
        { href: "https://chullostours.com/catalogo/", icon: <BsSuitcase2 />, text: "Catalogo de Tours" },
        { href: "https://api.whatsapp.com/send?phone=51992558512", icon: <FaWhatsapp />, text: "Consulta con un Experto" },
        { href: "https://www.tripadvisor.es/Attraction_Review-g294314-d26719669-Reviews-Chullos_Tours-Cusco_Cusco_Region.html", icon: <MdOutlineRateReview />, text: "Reviews & Opiniones" },
        { href: "#", icon: <FiMapPin />, text: "Visitanos en Cusco" },
    ];

    return (
        <div className="buttons_section">
            {buttonsData.map((button, index) => (
                <a key={index} href={button.href} target='_blank'>
                    <span className='button_content'>
                        <i className='icon_button'>{button.icon}</i>
                        {button.text}
                    </span>
                    <span className='icon_go'>
                        <i><FaArrowRight /></i>
                    </span>
                </a>
            ))}
        </div>
    );
}