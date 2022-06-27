import React, { useEffect, useState } from 'react'
import Youtube from "react-youtube"
import axios from "../../axios"
import {API_KEY, imageUrl} from "../../Constants/constants"
import "./RowPost.css"



function RowPost(props) {
   const [movie, setMovie] = useState([])
   const [urlId,setUrlId] =useState('')

      useEffect(() => {
        axios.get(props.url).then((Response)=>{
            console.log(Response.data.results)
            setMovie(Response.data.results)
           }).catch(err=>{
            // alert("Network Error")
           })
       
     }, [])
     const opts = {
      heightmax: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
   }
   const handleMovie= (id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
         if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
         }else{
            console.log("No Trailer Found")
         }
         
         

      })
   }
     

  return (
    <div className="row">
       <h2>{props.title}</h2>
         <div className="posters">
            {movie.map((obj)=>

               <img onClick={()=>{
                  handleMovie(obj.id)

               }} alt="poster" className={ props.isSmall ? "small-poster" :"poster"} src={`${imageUrl + obj.backdrop_path}`} />
            )}
            
            
            
            
         </div>
         <div>
            {urlId && <Youtube opts={opts} videoId={urlId.key} />}
         </div>

    </div>
  )
}

export default RowPost
