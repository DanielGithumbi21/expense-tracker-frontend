import React, { useState } from 'react'
import "./Login.css"
import image2 from "../../Assets/logo.png"
import image3 from "../../Assets/ai-1.svg"
import image4 from "../../Assets/customer 1.svg"
import image5 from "../../Assets/insight 1.svg"
import image6 from "../../Assets/business-and-finance 1.svg"

const SignBanner = () => {

    return (

        <React.Fragment>
            <div className="container login-banner">
                <div style={{ display: "flex" }}>
                    <img src={image2} className="img-fluid" alt="..." />
                    <h5 className="font-medium leading-tight text-xl mt-0 mb-2 " style={{ padding: "20px" }}>Expense Tracker</h5>
                </div>


                <p>Expense Tracker is a program that helps people control or track their spending behaviours.</p>
                <div className="text-center mt-3" style={{ marginLeft: "100px" }}>
                    <div className="mb-4" style={{ display: "flex" }}>
                        <img src={image3} className="img-fluid" alt="..." />
                        <p>Better decision making</p>
                    </div>

                    <div className="mb-4" style={{ display: "flex" }}>
                        <img src={image4} className="img-fluid" alt="..." />
                        <p>360° expense tracking</p>
                    </div>

                    <div className="mb-4" style={{ display: "flex" }}>
                        <img src={image5} className="img-fluid" alt="..." />
                        <p>100% finance control</p>
                    </div>

                    <div className="mb-4" style={{ display: "flex" }}>
                        <img src={image6} className="img-fluid" alt="..." />
                        <p>Revenue Projection Charts</p>
                    </div>

                </div>

            </div>
        </React.Fragment>

    )
}

export default SignBanner