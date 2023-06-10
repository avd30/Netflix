import "./Banner.css"
import axios from "../Api/axios";
import requests from "../Api/Request.js";
import { useState, useEffect} from "react";

export const Banner = () => {

  const[movie,setMovie]=useState([]);

  useEffect(()=> {
    async function fetchData(){
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length )
        ]
      );
      return request;
    }
    fetchData();
  },[]);

  const truncate=(string,n)=>{
    return string?.length >n ?string.substr(0,n-1):string;

  };

  return (
    <header className="banner" style={{
      backgroundSize:"cover",
      backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      backgroundPosition:"center center",
      }}>

      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title}</h1>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie.overview,150)+"..."}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  )
}


