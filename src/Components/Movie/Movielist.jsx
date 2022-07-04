import React from 'react'
import { UseGlobalContext } from '../../context'
import Moviesingle from './Moviesingle';
import load from './../../assets/load.svg'

function Movielist() {
    const {loading, Data} = UseGlobalContext();

    if (loading) {
        return (
          <div className='flex items-center justify-center mt-64'>
            <img src={load} alt="Loader" />
          </div>
        );
      }
      if (Data.length < 1) {
        return <h1 className='text-center mt-64 text-4xl font-bold'>No movie found</h1>;
      } 
      else {
        return (
          <section className="mt-10">
            <h1 className="text-center font-bold text-4xl">The List</h1>
            <section className="grid grid-cols-2 justify-center items-center place-items-center ">
              {Data.results.map((item) => {
                return <Moviesingle key={item.id} {...item} />;
              })}
            </section>
          </section>
        );
      }
}

export default Movielist