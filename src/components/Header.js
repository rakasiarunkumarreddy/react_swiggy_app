import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    const[clickButton,setClickButton]=useState("login")
    return (
        <div className="header">
            <img className="logo" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1200"/>
        <div className="list">
            <ul>
                <li>
                    <Link to="/about">Home</Link></li>
                <li>About</li>
                <li>
                    <Link to="/contact">Contact
                    </Link></li>
                <li>Address</li> 
                <button className="button" onClick={()=>{
                     setClickButton("logout");
                }} >{clickButton}</button>            
            </ul>
        </div>
        </div>
    )
}
export default Header;