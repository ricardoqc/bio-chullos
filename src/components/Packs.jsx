import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import cusco_img1 from '../assets/catalog/cusco1.jpg'
import cusco_img2 from '../assets/catalog/cusco2.jpg'
import cusco_img3 from '../assets/catalog/cusco3.jpg'


export const Packs = () => {
    return (
        <div className="packs_section">
            <div className='title_section'>
                <span className='subtitle'>Nuestros</span>
                <span className='main_title'>Paquetes</span>
            </div>
            <div className="card_section">
                <div className="card">
                    <div className="img_card">
                        <picture>
                            <img src={cusco_img1} alt="" />
                        </picture>
                    </div>
                    <div className="description_card">
                        <h2>Descubre Cusco en 4 Días</h2>
                        <span>Incluye: <em>alojamiento, transporte</em></span>
                        <a href="http://"><span className='link'><i><FaWhatsapp /></i> Consultar</span></a>
                    </div>
                </div>
                <div className="card">
                    <div className="img_card">
                        <picture>
                            <img src={cusco_img2} alt="" />
                        </picture>
                    </div>
                    <div className="description_card">
                        <h2>Descubre Cusco en 4 Días</h2>
                        <span>Incluye: <em>alojamiento, transporte</em></span>
                        <a href="http://"><span className='link'><i><FaWhatsapp /></i> Consultar</span></a>
                    </div>
                </div>
                <div className="card">
                    <div className="img_card">
                        <picture>
                            <img src={cusco_img3} alt="" />
                        </picture>
                    </div>
                    <div className="description_card">
                        <h2>Descubre Cusco en 4 Días</h2>
                        <span>Incluye: <em>alojamiento, transporte</em></span>
                        <a href="http://"><span className='link'><i><FaWhatsapp /></i> Consultar</span></a>
                    </div>
                </div>
            </div>
            <button className='button'>
                <a href="http://">Ver Todos</a>
            </button>
        </div>
    )
}
