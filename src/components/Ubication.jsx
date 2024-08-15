import React from 'react'

export const Ubication = () => {
    return (
        <div className='ubication_section'>
            <div className='title_section'>
                <span className='main_title'>Ubícanos</span>
            </div>
            <div className="map" style={{ width: '393px' }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2765420776445!2d-71.97899658847172!3d-13.518613086794499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd674c7ead62b%3A0xea7ddcac882ef46b!2sSobre%20Chullos%20Tours!5e0!3m2!1ses-419!2spe!4v1723680668193!5m2!1ses-419!2spe" 
                    width="340" 
                    height="250" 
                    style={{border: 0, borderRadius: '12px'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}
