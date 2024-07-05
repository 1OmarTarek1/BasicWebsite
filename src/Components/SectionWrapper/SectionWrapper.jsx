import './SectionWrapper.css'






const SectionWrapper = ( props ) => {
    return (
        <>    
        <div className="MainSection">
            {props.secTitle && (
                <div className="SectionTitle">
                    <span>
                        {props.secTitle}
                    </span>
                </div>
            )}
            <div className='SectionWrapper'>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default SectionWrapper