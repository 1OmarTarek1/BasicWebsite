import './CarouselItem.css'






const CarouselItem = ( props ) => {
    return (
        <div className="carouselItem">
            <div className="itemTitle">
                {props.title}
            </div>
        </div>
    )
}

export default CarouselItem