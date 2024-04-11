import './Footer.css'
import { Link } from 'react-router-dom'

function Footer()
{
    return(
        <div>
            <Link to="Voir" className="card4">
            <button className='btn1'>Voir +</button> 
            </Link>
        <div className="footer">
        <h1>Vos avis</h1>
        <textarea rows="15" cols="50">Ecrire ici</textarea>
        <div className="button">
        <button className="btn2"><span>Envoyer</span></button>
        </div>
        </div>
        </div>
    )
        
    
}


export default Footer;
