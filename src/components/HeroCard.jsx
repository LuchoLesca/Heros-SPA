import React from 'react';
import { Link } from 'react-router-dom';

import {capitalize} from '../utils/stringTreatment.js';

const HeroCard = ( {heroData} ) => {

    const {name, alter, biography} = heroData;

    return (
        <>
            <div className="card m-1" style={{ width: "18rem", display: "inline-block" }}>
                <img className="card-img-top" src={`./assets/img/characters/${name}1.png`} alt={name} style={{height:"17rem", objectFit:"scale-down", background:"white"}}/>
                <div className="card-body">
                    <h5 className="card-title">{ capitalize(name) }</h5>
                    <h6 className="card-subtitle">{ capitalize(alter) }</h6>
                    <p className="card-text text-trucate">{ biography }</p>
                    <Link className="btn btn-primary" to={`/hero/${name}`}> More details</Link>
                </div>
            </div>
        </>
     );
}
    
 
export default HeroCard;