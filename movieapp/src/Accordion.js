import { useState } from "react";
import "./accordion.css";

const data = [
    {
        id: 1,
        title: "Accordian 1",
        description: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
        id: 2,
        title: "Accordian 2",
        description: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
        id: 3,
        title: "Accordian 3",
        description: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    }
]

function Accordion({ info, activeId, setActiveId }) {
    const toggleAccordion = () => {
        setActiveId(activeId === info.id ? -1 : info.id);
    }

    return (
        <div className="accordion">
            {/* <b>Current Id {info.id} , Active Id: {activeId} </b> */}
            <p className="title" onClick={toggleAccordion}>{info.title}</p>
            {activeId === info.id && <p>{info.description}</p>}
        </div>
    );
}


function ListAccordion() {
    const [activeId, setActiveId] = useState(-1);

    return <div className="accordions-list">
        {
            data.map((accordion) => (
                <Accordion
                    info={accordion}
                    activeId={activeId}
                    setActiveId={setActiveId}
                />
            )
            )
        }
    </div>
}

export default ListAccordion;