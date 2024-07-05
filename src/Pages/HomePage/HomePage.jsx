import { BoysCarousel, GirlsCarousel, HomeHeaderSec, MenCarousel, WomenCarousel } from '../../Sections';

import './HomePage.css'




const HomePage = () => {
  return (
    <div className='HomePage'>
        <HomeHeaderSec />
        <MenCarousel />
        <WomenCarousel />
        <BoysCarousel />
        <GirlsCarousel />
    </div>
  )
}

export default HomePage