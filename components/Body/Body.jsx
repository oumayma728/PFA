import home1 from './home1.jpg'
import Adopter from './Adopter.png'
import don from './don.png'
import list from './list.png'
import './Body.css'
import { Link } from 'react-router-dom'
function Body()
{
    return(
        <div className='main'>
        <img src={home1} className='homepic' alt=""/>
        <div className='conten'>
        <a href="#" className='content'>
            <img src={Adopter} className='adopter' alt=""></img>
            Adopter un animal</a>
        <Link to="Lister" className="content1">
            <img src={list} className='list' alt=""></img>
            Lister un animal</Link>
        <a href="#" className='content2'>
        <img src={don} className='don' alt=""></img>
            Faire un don </a>
        </div></div>
        
    );
}
export default Body