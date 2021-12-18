import React from 'react';

import './App.css';
import App1 from './App1';
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'


let object={
  Name:"Alan Ford",EmployeeId:"00005152",Appointment:"9:00(24-05-2016)",email:"alan.form@email.nl",phone:"1234567890"
}

function App() {
  return (
    <div className="site-container">
    
    <App1 name={object.Name} id={object.EmployeeId}/>
    <App2 appointmnet={object.Appointment} email={object.email} phone={object.phone} />
    <App3 />
    <App4 />

    
    </div>
  );
}

export default App;
