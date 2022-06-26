import React, { useEffect, useState } from 'react'
import axios from "../../axios"
import {API_KEY,imageUrl} from "../../Constants/constants"

import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(()=>{
    axios.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`).then((Response)=>{
      
      setMovie(Response.data.results[5])
      
      

    })

  },[])

   

  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className="banner">
        <div className="content">
           <h1>{movie ? movie.title :""}</h1>
             <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">More-info</button>

           </div>
           <h1 className="description">{movie.overview}</h1>
           </div>
           <div className="fade-bottom"></div>







    </div>
  )
}

export default Banner