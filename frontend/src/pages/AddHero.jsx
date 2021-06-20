import React, { useState } from 'react';

import Carousel from 'components/Carousel';
import FormAdd from 'components/FormAdd';

import { defaultHero } from 'utils/defaultObjets';


const AddHero = () => {
          
    const [hero, setHero] = useState(defaultHero)

    return ( 
        <div className="Details container-fluid">
            <div className="row mx-5">
                {/* Carousel */}
                <div className="col-6 p-5">
                    <Carousel
                        name={hero.name}
                        images={hero.images}
                    />
                </div>
                {/* Form */}
                <div className="col-6 p-5">
                    <FormAdd
                        hero={hero}
                        setHero={setHero}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddHero;