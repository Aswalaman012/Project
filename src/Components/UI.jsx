import React, { useState,useEffect } from 'react';


const UI = () => {
 const [local,setLocal]=useState([]);
useEffect(()=>{
  const getLocalStorage =(()=>{
    const value= JSON.parse(localStorage.getItem('Data'));
    console.log(value);
    return value;
   })
   
   setLocal(getLocalStorage());
   
},[])

  
  return (
    <div>
    <h2>Tasks</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Date</th>
          <th>{local[0]}</th>
        </tr>
      </thead>
      <tbody>
        {/* {local.map((val,index) => (
          <tr key={index}>
            <td>{val.id}</td>
            <td>{val.task}</td>
            <td>{val.date}</td>
            <td>{val.time}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  </div>
  );
};

export default UI;