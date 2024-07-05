import { SectionWrapper } from '../../../../Components';
import { MainCarouselSec } from '../../../../Sections';
import './MenCarousel.css';

const MenCarousel = () => {
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
        <SectionWrapper secTitle={"Men"}>
            <MainCarouselSec 
            iD={"MenCarousel"} 
            cla={"MenCarousel"} 
            ItemsData={ItemsData}
            />
        </SectionWrapper>
    );
};

export default MenCarousel;
