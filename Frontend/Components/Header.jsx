import React, { useState, useEffect } from "react";

function Greet() {
  const [meridiem, setMeridiem] = useState("");
  const [greeting, setGreeting] = useState("");
  const [owner] = useState("Gurveer Partap Singh");

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 12) {
      setMeridiem("PM");

      if (hours >= 17) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Afternoon");
      }
    } else {
      setMeridiem("AM");
      setGreeting("Good Morning");
    }
  }, []);

  return (
    <div className="flex items-center justify-between w-full shadow-xl p-1">
      <h1 className="text-4xl font-sans font-bold text-white p-8">
        {greeting}, {owner}
      </h1>
      <i className="fa-solid fa-gear mr-8 text-white cursor-pointer text-2xl"></i>
    </div>
    
  );
}

export default Greet;