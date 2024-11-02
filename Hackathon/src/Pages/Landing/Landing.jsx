import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import Topcouncelors from './TopCouncelors/Topcouncelors'
import Feature from './AmanCards/Featurs'
import Map from './AmanMap/Map'
import Uni from './Abhay/Uni'
function Landing() {
  return (
   <>
   <HeroSection/>
   
   {/* Cards */}
   <Feature/>
   <Topcouncelors/>
   {/* University */}
   <Map/>
   <Uni/>
   {/* Map */}
   

   
   </>

  )
}

export default Landing