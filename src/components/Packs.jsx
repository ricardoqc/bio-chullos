import React from 'react'

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
                            <img src="#" alt="" />
                        </picture>
                    </div>
                    <div className="description_card">
                        <h2>Descubre Cusco en 4 Días</h2>
                        <span>Incluye: <p>alojamiento, transporte</p></span>
                        <span><i></i> Consultar</span>
                    </div>
                </div>
                <div className="card">
                    <div className="img_card">
                        <picture>
                            <img src="#" alt="" />
                        </picture>
                    </div>
                    <div className="description_card">
                        <h2>Descubre Cusco en 4 Días</h2>
                        <span>Incluye: <p>alojamiento, transporte</p></span>
                        <span><i></i> Consultar</span>
                    </div>
                </div>
                <div className="card">
                    <div className="img_card">
                        <picture>
                            <img src="#" alt="" />
                        </picture>
                    </div>
                    <div className="description_card">
                        <h2>Descubre Cusco en 4 Días</h2>
                        <span>Incluye: <p>alojamiento, transporte</p></span>
                        <span><i></i> Consultar</span>
                    </div>
                </div>
            </div>
            <button className='button'>
                <a href="http://">Ver Todos</a>
            </button>
        </div>
    )
}
