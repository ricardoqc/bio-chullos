import React from 'react'
import { FaPlus } from "react-icons/fa";
import cusco_img1 from '../assets/catalog/cusco1.jpg'
import cusco_img2 from '../assets/catalog/cusco2.jpg'
import cusco_img5 from '../assets/catalog/cusco5.jpg'
import { cusco6dias, cusco5dias, lagunahumantay } from '../assets/links/urls_wpp'

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
                        <h2>Descubre Cusco en 6 Días</h2>
                        <span>Incluye: <em>alojamiento, transporte</em></span>
                        <a href="https://chullostours.com/tours/aventura-en-cusco-6-dias/" target='_blank'><span className='link'><i><FaPlus /></i> Ver Paquete</span></a>
                    </div>
                </div>
                <div className="card">
                    <div className="img_card">
                        <picture>
                            <img src={cusco_img2} alt="" />
                        </picture>
                    </div>
                    <div className="description_card">
                        <h2>Cusco Essentials 5 Días</h2>
                        <span>Incluye: <em>alojamiento, transporte</em></span>
                        <a href="https://chullostours.com/tours/cusco-magico-5-dias/" target='_blank'><span className='link'><i><FaPlus /></i> Ver Paquete</span></a>
                    </div>
                </div>
                <div className="card">
                    <div className="img_card">
                        <picture>
                            <img src={cusco_img5} alt="" />
                        </picture>
                    </div>
                    <div className="description_card">
                        <h2>Humantay Trek Full Day</h2>
                        <span>Incluye: <em>almuerzo, transporte</em></span>
                        <a href="https://chullostours.com/tours/laguna-humantay/" target='_blank'><span className='link'><i><FaPlus /></i> Ver Tour</span></a>
                    </div>
                </div>
            </div>
            <button className='button'>
                <a href="https://chullostours.com/catalogo/" target='_blank'>Ver Todos</a>
            </button>
        </div>
    )
}
