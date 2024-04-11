import local from './local.png'
import './Animaux.css'
function Animaux(props){
    return(
        
        <div className="cards">
            <h1>
                <img src={props.img} className='bobby' alt=""></img>
                {props.name}</h1>
            <h1>
            <img src={local} className='local' alt=""></img>
                {props.local}</h1>
            </div>
    );
}
export default Animaux