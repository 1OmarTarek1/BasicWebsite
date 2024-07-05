import { SectionWrapper } from '../../../../Components';
import { MainCarouselSec } from '../../../../Sections';
import './BoysCarousel.css';

const BoysCarousel = () => {
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
        <SectionWrapper secTitle={"Boys"}>
            <MainCarouselSec 
            iD={"BoysCarousel"} 
            cla={"BoysCarousel"} 
            ItemsData={ItemsData}
            />
        </SectionWrapper>
    );
};

export default BoysCarousel;
