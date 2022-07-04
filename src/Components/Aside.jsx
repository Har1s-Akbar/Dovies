import React from "react";
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {ImSearch} from 'react-icons/im'

function Aside() {
  return (
    <aside className=" text-stone-300 w-64 bg-slate-900 border border-orange-100 border-y-0 border-l-0 min-h-screen">
      <div className="mt-10">
        <div className="flex items-center justify-center">
            <Link to='/'>
            <AiFillHome className="mr-5" size={36}/>
            <h1>Home</h1>
            </Link>
        </div>
        <div className="flex mt-10 items-center justify-center">
            <Link exact to='movie'>
            <ImSearch className="mr-5" size={36}/>
            <h1>Search</h1>
            </Link>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
