import React from 'react';

import './App.css';
import App1 from './App1';
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'




function App() {
  const object={
    Name:"Alan Ford",EmployeeID:"00005152",Appointment:"9:00(24-05-2016)",Email:"alan.form@email.nl",phone:"+31123456789"
  }
  return (
    <div className="site-container">
    
    <App1 Name={object.Name} EmployeeID ={object.EmployeeID}/>
    <App2 Appointment={object.Appointment} Email={object.Email} Phone={object.phone} />
    <App3 />
    <App4 />

    
    </div>
  );
}

export default App;
