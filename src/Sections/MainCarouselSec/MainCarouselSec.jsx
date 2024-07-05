import Slider from "react-slick"; 
import { CarouselItem } from '../../Components';
import './MainCarouselSec.css'






const MainCarouselSec = ( props ) => {
    const Items = props.ItemsData.map((item, index) => {
        return <CarouselItem key={index} title={item.title} />
    });

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    className: "slider",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className={`MainCarouselSec ${props.cla}`} id={props.iD}>
            <Slider {...settings}> 
                {Items}
            </Slider>
        </div>
    )
}

export default MainCarouselSec