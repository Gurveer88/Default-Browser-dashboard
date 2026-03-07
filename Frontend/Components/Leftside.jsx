import React from 'react'
import Clock from './Clock'
import TodoApp from './TodoApp'
import Header from './Header'

function Leftside() {
  return (
    <div id='leftSide' className='flex flex-col px-4 w-full lg:w-1/4 md:w-2/5 space-y-2'>
        <Clock/>
        <TodoApp/>
    </div>
        
  )
}

export default Leftside