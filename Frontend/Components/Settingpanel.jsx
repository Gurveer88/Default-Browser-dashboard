import React from 'react'
import {useState} from 'react'

function Settingpanel() {
    const [bgImage, setBgImage] = useState(null);

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBgImage(file);
    if (!file) return;
    const imageURL = URL.createObjectURL(file);
    document.body.style.backgroundImage = `url(${imageURL})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  };
  return (
    <div className='w-1/2 h-1/2 bg-gray-900 rounded-lg flex flex-col items-center justify-start'>
        <h1 className='text-2xl text-white font-bold'>Settings</h1>
        <div id='BgchangeSetting' className='flex flex-col w-full px-6'>
            <span className='text-white mt-8 font-medium'>Change Dashboard background:-</span>
            <input type="file" className='w-2/5 mt-2 rounded-2xl border border-black p-2 focus:outline-none bg-white text-black hover:bg-gray-700 hover:text-white ' accept='image/*'  onChange={handleImageChange}/>
        </div><hr className='w-full my-6 border-gray-700'/>
        
    </div>
  )
}

export default Settingpanel