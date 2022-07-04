import React from 'react'
import {useEffect, useState, useRef} from 'react'
import { UseGlobalContext } from '../context'
function Form() {
  const {setSearchTerm} = UseGlobalContext();
  const searchValue = useRef('');

  useEffect(()=>{
    searchValue.current.focus();
  },[searchValue])
  function search (){
    setSearchTerm(searchValue.current.value)
  }

    const submitHandler = (e)=>{
        e.preventDefault();
        setSearchTerm(searchValue.current.value)
    }
    
  return (
    <form onSubmit={submitHandler} className='flex items-center justify-center mt-5'>
        <label htmlFor="name" className='text-gray-800 text-xl mr-5'>Search</label>
        <input type="text" name='name' ref={searchValue} onChange={search}  id='name' className='border-b-2 bg-transparent w-96' placeholder='Movies....'/>
    </form>
  )
}

export default Form