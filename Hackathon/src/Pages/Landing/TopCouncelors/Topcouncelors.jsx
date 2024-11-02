import React from 'react';
import Layout from './Layout';
import '../TopCouncelors/Councellor.css'


const doctors = [
    {
        id: 1,
        name: " John Doe",
        image: "./Assests/Ellipse 11.png",
     
        description: "Greatly helped in my academic journey."
    },
    {
        id: 2,
        name: " Jane Smith",
        image: "./Assests/Ellipse 12.png",
    
        description: "Provided invaluable support during challenging times."
    },
    {
        id: 3,
        name: " Emily Johnson",
      image: "./Assests/Ellipse 13.png",
    
        description: "Always available to answer questions and offer guidance."
    },
    {
        id: 4,
        name: "Michael Brown",
      image: "./Assests/Ellipse14.png",
        
        description: "Made complex topics easy to understand and enjoyable."
    },
   
];

function Topcouncelors() {
    return (
        <div className="top-counselors">
            <h1> Our <span style={{ color: '#00A6F6'}}> Ratings</span></h1>
            <div className="top-counselors-container">
                {doctors.map(doctor => (
                    <Layout 
                        key={doctor.id} 
                        name={doctor.name} 
                        image={doctor.image}  
                        description={doctor.description} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Topcouncelors;
