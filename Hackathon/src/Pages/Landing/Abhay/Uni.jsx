import React from 'react';
import './Uni.css';

const logos = [
    { src: './NITM.gif', alt: 'NITM Logo', name: 'NITM' },
    { src: './IITM.png', alt: 'IITM Logo', name: 'IITM' },
    { src: './IIM.webp', alt: 'IIM Logo', name: 'IIM' },
    { src: './IIMT-Group-of-Colleges-Logo.webp', alt: 'IIMT Logo', name: 'IIMT' },
    { src: './IITG.png', alt: 'IITG Logo', name: 'IITG' },
    { src: './NITP.png', alt: 'IITP Logo', name: 'IITP' },
    { src: './NITM.gif', alt: 'NITM Logo', name: 'NITM' },
    { src: './IITM.png', alt: 'IITM Logo', name: 'IITM' },
    { src: './IIM.webp', alt: 'IIM Logo', name: 'IIM' },
    { src: './IIMT-Group-of-Colleges-Logo.webp', alt: 'IIMT Logo', name: 'IIMT' },
    { src: './IITG.png', alt: 'IITG Logo', name: 'IITG' },
    { src: './NITP.png', alt: 'IITP Logo', name: 'IITP' },    { src: './NITM.gif', alt: 'NITM Logo', name: 'NITM' },
    { src: './IITM.png', alt: 'IITM Logo', name: 'IITM' },
    { src: './IIM.webp', alt: 'IIM Logo', name: 'IIM' },
    { src: './IIMT-Group-of-Colleges-Logo.webp', alt: 'IIMT Logo', name: 'IIMT' },
    { src: './IITG.png', alt: 'IITG Logo', name: 'IITG' },
    { src: './NITP.png', alt: 'IITP Logo', name: 'IITP' },
    // Repeat logos as needed
];

const UniversityLogos = () => {
    return (
        <div className="abhay-container1">
            <div className="abhay-university-container">
                <div className="abhay-university-logos">
                    {logos.map((logo, index) => (
                        <div key={index} className="abhay-logo-item">
                            <img src={logo.src} alt={logo.alt} className="abhay-university-logo" />
                            <div className="abhay-university-name">{logo.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UniversityLogos;