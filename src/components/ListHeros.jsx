import React from 'react';

import HeroCard from './HeroCard';


const ListHeros = ({ heros }) => {

    return (
        heros.map(hero =>
            <HeroCard 
                key={hero.name}
                heroData={hero}
            />
        )
    )
}

export default ListHeros;