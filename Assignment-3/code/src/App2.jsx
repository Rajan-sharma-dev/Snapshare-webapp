import React from "react";



function App2(tt){
    return(
        <div className="customer-info">
        <h2>Appoinment <span>{tt.appointmnet}</span></h2>
        
        <h2>Email <span>{tt.email}</span></h2>
        <h2>Phone <span>{tt.phone}</span></h2>



        </div>
    )
}

export default App2