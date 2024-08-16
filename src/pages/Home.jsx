import { Link } from "react-router-dom"
import "../style css/Home.css";
import Profile from "../assets/images/profile.jpeg"
export function Home() {
    return (
        <>
            <div className="container">
                <div className="intro">
                    <p>Web Application Developper, Electrical Engineer,
                    Entrepreneur, & Educator</p>
                </div>
                <div className="welcome">
                    <h1>Hello, Welcome!</h1>
                    <h2>A bit about me:</h2>
                </div>        
                <div className="profile">
                    <img src={Profile} alt="profile" height="400px" />
                </div>
                <div className="resume">
                    <h3>My Resume</h3>
                </div> 
                <div className="project">
                    <h3>My Projects</h3>
                </div>
                <div className="skills">
                    <h3>My Skills</h3>
                </div>      
            </div> 

        </>        
    )    
}