import React from "react";
import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      setDate(`${day}/${month}/${year}`);
    };
    const DateInterval = setInterval(updateDate, 1000);
    updateDate();
    return () => {
      clearInterval(DateInterval);
    }
  }, []);
  useEffect(() => {
    const updateTime = () => {
      const time = new Date();
      const hours = time.getHours().toString().padStart(2, "0");
      const minutes = time.getMinutes().toString().padStart(2, "0");
      const seconds = time.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    const IntervalID = setInterval(updateTime, 1000);
    updateTime();
    return () => {
      clearInterval(IntervalID);
    };
  }, []);
  return (
    <div
      id="clock"
      className="w-full max-w-lg  backdrop-blur-lg bg-white/30 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center border border-white"
    >
      <h1 id="time" className="text-6xl font-sans font-bold text-white p-8">
        {time}
      </h1>
      <h2 id="date" className="text-2xl font-sans text-white font-bold">
        {date}
      </h2> 
    </div>
  );
}
export default Clock;
