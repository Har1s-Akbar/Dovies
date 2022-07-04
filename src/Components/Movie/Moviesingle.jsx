import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Moviesingle({ id, image_url, name, type, year }) {
    
  if (type === "movie") {
    return (
      <article className=" flex w-5/6 mt-14 rounded-xl border">
        <img src={image_url} alt={name} className="rounded-xl" />
        <div className="text-zinc-800  mt-24 pr-10 ml-4 text-left">
          <h1 className="w-42 font-bold text-xl">{name}</h1>
          <p className="text-xl text-purple-900">
            {type}
          </p>
          <p className="text-neutral-800 text-xl">
            {year}
          </p>
          <Link to={`/details/${id}`}>
        <button className="page-btn border p-2 mt-10 rounded-xl"> More detail </button>
        </Link>
        </div>
      </article>
    );
  }
}

export default Moviesingle;
