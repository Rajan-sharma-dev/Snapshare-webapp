import React from 'react';


import Data  from './Sdata';



function Mypage(){
  return (
    <>
    <div className='card'>
    
    <img src={Data[0].image}></img>
    
    <div className='container'>
    <p>{Data[0].sname}</p>

    <h2>Location</h2>
    <h1>{Data[0].location}</h1>
    <h2>Blood Group</h2>
    <h1>{Data[0].BloodGroup}</h1>

    <h2>Age</h2>
    <h1>{Data[0].Age}</h1>
    </div>
    
    
    </div>
    </>)

}

export default Mypage