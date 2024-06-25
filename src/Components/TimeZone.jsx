import React from 'react';


const TimeZone = () => {
  const data = [
   "Asia/Kolkata (UTC+05:30)", "Asia/Shanghai (UTC+08:00)", 
"America/New_York (UTC-05:00)", "Asia/Jakarta (UTC+07:00)",
    "Europe/Moscow (UTC+03:00)","Asia/Karachi (UTC+05:00)" ,
  ];
 return (
    <>
      <div className="flex flex-col">
        <h4 className='mx-5 my-5'>Timezone</h4>
        <select className="mx-5 border-2">
          {data.map((val, ind) => (
            <option key={ind} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default TimeZone;
