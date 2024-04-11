import './Header.css'
import logo from './logo.png'
import home from './home.png'
import help from './help.png'
import interrogation from './interrogation.png'
import profile from './profile.png'
import {Link } from "react-router-dom";
export default function Header(){
    return (
        
        <div>
        <header>
            <nav className='nav1'>
                <img src={logo} className='logo' alt=""/>
                <h4>S.O.S Animaux</h4> 
                <ul className='nav_links'>
                <li><Link to="/">
                <img  src={home} className='acceuil' alt=""></img> Acceuil</Link></li>
                <li><Link to="/Aider">
                <img src={help} className='help' alt=""></img> Aider</Link></li>
                <li><a href='#a_propos'>
                <img src={interrogation} className='propos' alt=""></img> A propos nous</a></li>
                <li><Link to="/Log">
                <img src={profile} className='profile' alt=""></img> Compte</Link></li>
                </ul>
            </nav>
        </header>
        </div>
    )
    }
