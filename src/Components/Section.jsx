import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

const Section = (props) => {
  const weekDates = props.value;
  const currentDate = DateTime.now().setZone('Asia/Kolkata');
  // console.log(weekDates);
  // console.log(currentDate);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const [data, setData] = useState([]);
  const [local,setLocal]=useState([]);

  useEffect(() => {
    const Timeval = () => {
      let array = [];
      let Start = DateTime.fromObject({ hour: 8, minute: 0 });
      const Endd = DateTime.fromObject({ hour: 23, minute: 0 });

      while (Start <= Endd) {
        array.push(Start.toFormat('hh:mm a'));
        Start = Start.plus({ minutes: 30 });
      }
      return array;
    };
    setData(Timeval());
  }, []);
function savetolocalstorage(time , date){
  let userPrompt=prompt("enter your task:")
  const object = {
    id:local.length+1,
    task:userPrompt,
    date:date,
    time:time,
  }
  const valueOfLocal=[...local,object];
  setLocal(valueOfLocal);
  localStorage.setItem(`Data`,JSON.stringify(valueOfLocal))
}
  
    return (
      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          {days.map((day, index) => (
            
            <tr key={index}>
              <td className="border border-gray-300 p-2"> 
                <div>{day} <br /> {weekDates[index]}</div>
              </td>
              <td className="border border-gray-300 p-2">
          
                
                {
                  
                
                DateTime.fromISO(weekDates[index]) < currentDate ? "Past" :  data.map((time, ind) => (
                    <React.Fragment key={ind}>
                      <input  type="checkbox" onClick={()=>savetolocalstorage(time,weekDates[index])} />
                      <span>{time}</span>
                    </React.Fragment>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    
};

export default Section;