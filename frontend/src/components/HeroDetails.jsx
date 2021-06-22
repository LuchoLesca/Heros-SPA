// eslint-disable-next-line
import React from 'react';

import Carousel from './Carousel';
import Form from './Form';


const HeroDetails = ({ hero, setHero, editing }) => {

    return ( 
        <div className="Details container-fluid">
            <div className="row">
                {/* Carousel */}
                <div className="col-6">
                    <Carousel
                        name={hero.name}
                        images={hero.images}
                    />    
                </div>
                {/* Form */}
                <div className="col-6">
                    <Form 
                        hero={hero}
                        setHero={setHero}
                        editing={editing}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroDetails;