import AccordionShapeOpen from '../assets/accordion-shape-open.png'
import AccordionShapeClose from '../assets/accordion-shape-close.png'
import { useState } from 'react'

function Accordion({id, title, content}) {

    const [isAccordionOpen, setIsAccordionOpen] = useState(true)

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen)
    }


    return (
        <>
            <div className="accordion d-flex flex-column">
                <button onClick={toggleAccordion} className="btn border border-0 text-primary position-relative text-center" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`}>
                    <img src={isAccordionOpen ? AccordionShapeOpen : AccordionShapeClose} className="img-fluid" alt="Example" />
                    <div className="position-absolute top-50 start-50 translate-middle text-white text-nowrap">
                        <p>{title}</p>
                    </div>
                </button>
                <div className="collapse show px-4" id={id}>
                    {content}
                </div>
            </div>
        </>
    )
}

export default Accordion