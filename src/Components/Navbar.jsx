import React from 'react'
import '../index.css'






const Navbar = (props) => {
   
  return (
 
    <>
   <nav className="bg-violet-500 h-16 flex
   justify-between ">
   <div className='my-5'>
    <button  onClick={props.value}  className='mx-10'> Previous</button>
   <button  onClick={props.value1} className='mx-10'>Next</button>
   <button>Calender</button>
   </div>
    
      <div className="my-4 font-bold mx-10 text-2xl">{props.value3.toFormat('yyyy/LLL/dd')}</div>
    
</nav></>  )
} 

export default Navbar;