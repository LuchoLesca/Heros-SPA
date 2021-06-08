import React from 'react';

const HeroCard = ( {pathLogo, heroName, characterName, biography} ) => {

    return (
        <>
            <div className="card m-1" style={{ width: "18rem" }}>
                <img className="card-img-top" src={ pathLogo } alt="Default"/>
                <div className="card-body">
                    <h5 className="card-title">{ heroName }</h5>
                    <h6 className="card-subtitle">{ characterName }</h6>
                    <p className="card-text text-trucate">{ biography }</p>
                    <a href={"/"} className="btn btn-primary">Detalles</a>
                </div>
            </div>
        </>
     );
}
    
 
export default HeroCard;