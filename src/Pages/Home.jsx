import React from 'react'
import Aside from '../Components/Aside'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <section className=' flex flex-row'>
        <Aside/>
        <div className='items-center flex flex-col m-auto'>
            <h1 className='text-4xl mb-10'>Welcome To The <span className='text-gray-400'>D</span>ovies</h1>
            <p className='italic mb-5'>You can search for details of Movies</p>
            <Link to='/movie'>
            <button className='border rounded-xl px-10 py-2 text-xl home-btn'>
                Movie
            </button>
            </Link>
        </div>
    </section>
  )
}

export default Home