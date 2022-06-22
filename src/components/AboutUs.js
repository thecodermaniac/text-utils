import React, { useState } from 'react'

export default function AboutUs() {
    const [custyle, setstyle] = useState({
        background: '#fff',
        color: '#212529'

    })

    function tooglehandle() {
        if (custyle.background == '#fff') {
            setstyle({
                background: '#212529',
                color: '#fff'
            })
        }
        else {
            setstyle({
                background: '#fff',
                color: '#212529'

            })
        }
    }

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={custyle}>
                <h2 className="accordion-header" id="headingOne" style={custyle}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={custyle}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={custyle}>
                    <div className="accordion-body" style={custyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={custyle}>
                <h2 className="accordion-header" id="headingTwo" style={custyle}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={custyle}>
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={custyle}>
                    <div className="accordion-body" style={custyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={custyle}>
                <h2 className="accordion-header" id="headingThree" style={custyle}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={custyle}>
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={custyle}>
                    <div className="accordion-body" style={custyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <br />
            <button type="button" className="btn btn-dark" onClick={tooglehandle}>Dark</button>
        </div>
    )
}
