import React, { useEffect, useState } from 'react'
import axios from "../../axios"
import {API_KEY,imageUrl} from "../../Constants/constants"
import "./RowPost.css"



function RowPost(props) {
   const [movie, setMovie] = useState([])

      useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US'`).then((Response)=>{
            console.log(Response.data.results)
            setMovie(Response.data.results)
           }).catch(err=>{
            // alert("Network Error")
           })
       
     }, [])
     

  return (
    <div className="row">
       <h2>{props.title}</h2>
         <div className="posters">
            {movie.map((obj)=>

               <img alt="poster" className={ props.isSmall ? "small-poster" :"poster"} src={`${imageUrl + obj.backdrop_path}`} />
            )}
            
            
            
            
         </div>

    </div>
  )
}

export default RowPost
