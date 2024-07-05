import { SectionWrapper } from '../../../../Components';
import { MainCarouselSec } from '../../../../Sections';
import './WomenCarousel.css';


const WomenCarousel = () => {
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
        <SectionWrapper secTitle={"Women"}>
            <MainCarouselSec 
            iD={"WomenCarousel"} 
            cla={"WomenCarousel"} 
            ItemsData={ItemsData}
            />
        </SectionWrapper>
    );
};

export default WomenCarousel;
