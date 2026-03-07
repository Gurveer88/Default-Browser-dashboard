import React from 'react'
import Settingpanel from './Settingpanel'
import Searchbar from './Searchbar'

function Centralarea() {
  return (
    <div id='centralArea' className='flex flex-col w-full lg:w-3/4 md:w-3/5 p-8'>
        {/* <Settingpanel/> */}
        <Searchbar/>
    </div>
  )
}

export default Centralarea