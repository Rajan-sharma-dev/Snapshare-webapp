import React, { useState } from "react";
import Usestate1 from "./Postview";
import { BrowserRouter as Router, Route, Routes, Switch, NavL, NavLink } from 'react-router-dom'
const Ravi = () => {

    return (<div className="content" id="content">
        <div className="img1">

            <img src="https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg" />
        </div>
        <div className="btn">
            <h2>10x Team</h2>
            <NavLink to='/c' ><button >Button</button></NavLink>
        </div>


    </div>)
}


   



return (

    <>



        <Routes>
            <Route element={<Usestate1 />} exact path="/c" />
            <Route element={<Ravi />} exact path="/" />

        </Routes>







    </>



)
}

export default App