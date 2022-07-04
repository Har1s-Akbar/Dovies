import React from 'react'
import Form from './Form'
import Movielist from './Movie/Movielist'

function Mainheader() {
  return (
    <section className='h-full w-full'>
    <Form/>
    <Movielist/>    
    </section>
  )
}

export default Mainheader