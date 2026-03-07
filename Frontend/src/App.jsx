import { useState } from "react";
import "./App.css";
import Header from "../Components/Header";
import Leftside from "../Components/Leftside";
import Centralarea from "../Components/Centralarea";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        <Leftside />
        <Centralarea />
      </div>

    </div>
  );
}

export default App;
