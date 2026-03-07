import React from 'react'
import {useState} from 'react'

function Searchbar() {
    const [input, setinput] = useState("");
    const searchquery = () => {
        const url = "https://www.google.com/search?q=" + input;
        window.open(url, "_blank");
    }
    
  return (
    
    <div id='SearchBar' className='w-full flex'>
        <input type="text" className='w-11/12 p-4 rounded-2xl bg-white/30 backdrop-blur-lg border border-white focus:outline-none' placeholder='Search...' value={input} onChange = {(e) => {
            setinput(e.target.value);
        }}/>
        <button className='p-4 rounded-2xl ml-2 border border-white backdrop-blur-lg bg-white/30' onClick={searchquery}>Search</button>
    </div>
  )
}

export default Searchbar