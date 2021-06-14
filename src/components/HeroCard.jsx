import React from 'react';
import { Link } from 'react-router-dom';

import {capitalize, capitalizeBegin} from 'utils/stringTreatment.js';


const HeroCard = ({ heroData } ) => {

    const {name, alter, biography} = heroData;

    return (
        <><div className="card d-inline-block m-2" style={{width: "18rem"}}>
                <img src={`/assets/img/characters/${name}1.png`} alt={name} className="card-img-top border-bottom" style={{height:"20rem", objectFit:"contain"}}/>
                <div className="card-body">
                    <h5 className="card-title">{ capitalize(name) }</h5>
                    <h6 className="card-subtitle my-2 text-muted"><i>{ capitalize(alter) }</i></h6>
                    <p className="card-text text-truncate" style={{height:"1.4rem"}}>{ capitalizeBegin(biography) }</p>
                    <Link className="btn btn-primary" to={`/hero/${name}`}>More details</Link>
                </div>
            </div>
        </>
     );
}
    
 
export default HeroCard;