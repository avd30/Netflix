import "./Nav.css";
import { useState,useEffect } from "react";

export const Nav = () => {

    const[show,setShow]=useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>10){
            setShow(true);}
            else{
                setShow(false);
            }
    }
    useEffect(()=>{
       window.addEventListener("scroll",transitionNavBar)
       return ()=>window.removeEventListener("scroll",transitionNavBar)

    },[]);
  return (
    <div className={`nav ${ show && `nav_black`}`}>
      
      <div className="nav_contents">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="" className="nav_logo" />
      <img src="https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg" alt="" className="nav_avatar" />
      
      </div>
    </div>
  )
}

 
