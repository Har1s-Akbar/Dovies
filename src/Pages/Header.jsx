import React from 'react'
import Mainheader from '../Components/Mainheader'
import Aside from '../Components/Aside'

function Header() {
  return (
    <section className=' flex'>
        <Aside/>
        <Mainheader/>
    </section>
  )
}

export default Header