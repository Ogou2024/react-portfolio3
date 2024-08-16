import { Link } from "react-router-dom"
export default function Navbar(){
    return (
        <nav className= "nav">
            <Link to="/" className="site-title">Livenghtston Cius Portfolio</Link>
            <ul>
                <li className="active">
                    <Link to="/resume">Resume</Link>
                </li>
                <li className="active">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="active">
                    <Link to="/about">About</Link>
                </li>
                <li className="active">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        
    )
}