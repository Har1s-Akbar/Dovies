import React from 'react'
import {MdOutlineNightlightRound} from 'react-icons/md'
import {BsSunFill} from 'react-icons/bs'

function Nav() {
  return (
    <nav className='h-18 p-4 bg-slate-900 text-white flex items-cenetr justify-between'>
        <div>
            <h1 className='text-2xl ml-4'><span className='text-gray-400'>D</span>ovies</h1>
        </div>
        <div className='flex flex center'>
            <MdOutlineNightlightRound className='mr-10' size={40}/>
            <BsSunFill className='mr-5' size={40}/>
        </div>
    </nav>
  )
}

export default Nav