import React, { useState, useEffect } from 'react';
import '../src/index.css';
import { DateTime } from 'luxon';
import Section from './Components/Section';
import Navbar from './Components/Navbar';
import TimeZone from './Components/TimeZone';

const App = () => {
  const [date, setDate] = useState(DateTime.now().setZone('Asia/Kolkata'));
  const [weekDates, setWeekDates] = useState([]);

  const updateWeekDates = (currentDate) => {
    const start = currentDate.startOf('week');
    const weekArray = [];
    for (let i = 0; i < 5; i++) {
      weekArray.push(start.plus({ days: i }).toFormat('yyyy/LLL/dd'));
    }
    setWeekDates(weekArray);
  };

  const Previous = () => {
    const newDate = date.minus({ weeks: 1 });
    setDate(newDate);
    updateWeekDates(newDate);
  };

  const Next = () => {
    const newDate = date.plus({ weeks: 1 });
    setDate(newDate);
    updateWeekDates(newDate);
  };

  useEffect(() => {
    updateWeekDates(date);
  }, [date]);

  return (
    <>
      <Navbar value={Previous} value1={Next} value3={date}/>
      <TimeZone />
      <Section value={weekDates} acc={date} />
    </>
  );
};

export default App;
