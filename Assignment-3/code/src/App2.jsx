import React from "react";



function App2(tt){
    return(
        <div className="customer-info">
        <h2>Appointment On<span>{tt.Appointment}</span></h2>
        
        <h2>Email:<span>{tt.Email}</span></h2>
        <h2>Phone<span>{tt.Phone}</span></h2>



        </div>
    )
}

export default App2