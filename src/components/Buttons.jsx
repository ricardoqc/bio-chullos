import React from 'react';
import { BsSuitcase2 } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

export const Buttons = () => {
    const buttonsData = [
        { href: "#", icon: <TbWorld />, text: "Pagina Web" },
        { href: "#", icon: <BsSuitcase2 />, text: "Catalogo de Tours" },
        { href: "#", icon: <FaWhatsapp />, text: "Consulta con un Experto" },
        { href: "#", icon: <MdOutlineRateReview />, text: "Reviews & Opiniones" },
        { href: "#", icon: <FiMapPin />, text: "Visitanos en Cusco" },
    ];

    return (
        <div className="buttons_section">
            {buttonsData.map((button, index) => (
                <a key={index} href={button.href}>
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