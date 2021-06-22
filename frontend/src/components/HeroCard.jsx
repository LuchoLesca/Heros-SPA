import React from 'react';
import { Link } from 'react-router-dom';

import { capitalize, capitalizeBegin } from 'utils/stringTreatment.js';
import setDefaultSrc from 'utils/setDefaultSrc';


const HeroCard = ({ heroData } ) => {

    return (
        <><div className="card d-inline-block m-2" style={{width: "18rem"}}>
                <img
                    src={`/assets/img/characters/${heroData.name}1.png`}
                    alt={heroData.name} className="card-img-top border-bottom"
                    style={{height:"20rem", objectFit:"contain"}}
                    onError={setDefaultSrc}
                />
                <div className="card-body">
                    <h5 className="card-title">{ capitalize(heroData.name) }</h5>
                    <h6 className="card-subtitle my-2 text-muted"><i>{ capitalize(heroData.alter) || capitalize(heroData.name) }</i></h6>
                    <p className="card-text text-truncate" style={{height:"1.4rem"}}>{ capitalizeBegin(heroData.biography) }</p>
                    <Link className="btn btn-primary" to={`/hero/${heroData._id}`}>More details</Link>
                </div>
            </div>
        </>
     );
}
    
 
export default HeroCard;