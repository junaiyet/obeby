import React from 'react'
import AdditionalInfo from '../component/layout/AdditionalInfo';
import Advertise from '../component/layout/Advertise';
import Bestsellers from '../component/layout/Bestsellers';
import MiddleAdvertiesment from '../component/layout/MiddleAdvertiesment';
import Newarrival from '../component/layout/Newarrival';
import SpecialOffers from '../component/layout/SpecialOffers';
import Banner from './../component/layout/Banner';

function Home() {
  return (
<>
<Banner/>
<AdditionalInfo/>
<Advertise/>
<Newarrival/>
<Bestsellers/>
<MiddleAdvertiesment/>
<SpecialOffers/>
</>
  ) 

}

export default Home