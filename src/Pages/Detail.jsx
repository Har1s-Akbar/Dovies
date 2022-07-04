import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import load from './../assets/load.svg'

function Detail() {
    const {id} = useParams();
    const [detail, setDetail] = useState([])
    const [loading, setloading] = useState(false);
    const [VarDate, setvd] = useState('')

    const fetchDetails = async ()=>{
        setloading(true);
        try{
            const resp = await fetch(`https://api.watchmode.com/v1/title/${id}/details/?apiKey=fkVIY2GVlXfpJn24nxIKCWgahTx1HC8Mccs3d9cd`);
            const data = await resp.json();
            setloading(false);
            console.log(detail);
            const {
                title,
                genre_names,
                original_language,
                plot_review,
                backdrop,
                trailer,
                release_date,
                user_Rating
            } = data
            setDetail(data);
            
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchDetails();
    },[id])
    const {
        title,
        original_language,
        plot_overview,
        poster,
        runtime_minutes,
        genre_names,
        type,
        us_rating,
        year,
        trailer,
        backdrop,
      } = detail;
    if(loading){
        return(
            <div className='flex item-center justify-center m-auto mt-64'>
                <img src={load} alt='loading' />
            </div>
        )
    }
    return (
        <section className="flex items-center justify-center p-10 mt-5 border">
          <div className="grid grid-cols-1 m-auto">
            <img src={backdrop} alt={title} className='rounded-xl h-5/6' />
          </div>
          <div className=" grid gap-4 grid-cols-2 text-left text-xl m-auto w-3/6">
          <h1 className="text-4xl col-span-2 ml-44 mb-10">{title}</h1>
            <p><span className="italic">Released</span>-<span className="font-bold">{year}</span></p>
            <p><span className="italic">Type</span>-<span className="font-bold">{type}</span></p>
            <p><span className="italic">Original Language</span>-<span className="font-bold">{original_language}</span></p>
            <p><span className="italic">Genre</span>-<span className="font-bold">{genre_names}</span></p>
            <p><span className="italic">Duration-</span><span className="font-bold">{runtime_minutes}  minutes</span></p>
            <p><span className="italic">Rated</span>-<span className="font-bold">{us_rating}</span></p>
            <p className="col-span-2"><span className="italic">Plot:-</span><br /><span className="text-2xl">{plot_overview}</span></p>
            <Link to='/'>
            <button className="page-btn p-3 border rounded-xl mt-5"> Return Home</button>
            </Link>
          </div>
          
        </section>
      );
}

export default Detail