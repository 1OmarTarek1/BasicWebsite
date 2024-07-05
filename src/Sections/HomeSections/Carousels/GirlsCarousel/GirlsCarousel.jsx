import { SectionWrapper } from '../../../../Components';
import { MainCarouselSec } from '../../../../Sections';
import './GirlsCarousel.css';

const GirlsCarousel = () => {
    const ItemsData = [
        {
            title: "Sport"
        },
        {
            title: "T-Shirts"
        },
        {
            title: "Chemises"
        },
        {
            title: "Pants"
        },
        {
            title: "Shorts"
        },
        {
            title: "Socks"
        },
        {
            title: "Boots"
        },
        {
            title: "Else"
        }
    ];

    
    return (
        <SectionWrapper secTitle={"Girls"}>
            <MainCarouselSec 
            iD={"GirlsCarousel"} 
            cla={"GirlsCarousel"} 
            ItemsData={ItemsData}
            />
        </SectionWrapper>
    );
};

export default GirlsCarousel;
