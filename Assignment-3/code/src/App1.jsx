import react from "react";

function App1(tt){
    console.log(tt.name)
    console.log(tt.id)
    
    return (<div className="container1">
        <div id="back">&#10094;</div>
        <div>
        <h1 className="h1"> {tt.name}</h1>
        <h2 className="h2">{tt.id}</h2>
        </div>
        <div>
        <button id="btn">Print</button>
        </div>
        </div>)
}

export default App1





