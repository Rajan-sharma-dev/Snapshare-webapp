import React, { useState } from "react";
import Usestate1 from "./Postview";
import { BrowserRouter as Router, Route, Routes, Switch, NavL, NavLink } from 'react-router-dom'

const App = () => {
    const [path, setPath] = useState("")
    const Ram = () => {
        setPath("App1")
        let content = document.getElementById("content")
        content.style.display = "None"

    }
    return (

        <>
            <div className="content" id="content">
                <div className="img1">
                
                    <img src="https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg" />
                </div>
                <div className="btn">
                <h2>10x Team</h2>
                    <NavLink to="/App1" ><button onClick={Ram}>Button</button></NavLink></div>


            </div>


            <Routes>
                <Route element={<Usestate1 />} exact path={path} />

            </Routes>







        </>



    )
}

export default App