import React, { useState, useEffect } from 'react';

import setDefaultSrc from 'utils/setDefaultSrc.js';


function Carousel({ name, images }) {

    const [selected, setSelected] = useState(1)

    let numbersList = []
    for(let i = 1; i <= images; i++) numbersList.push(i)


    useEffect(() => {
        if (selected > images) setSelected(1)
        if (selected < 1) setSelected(images)
    // eslint-disable-next-line
    }, [selected])
 
   
    return (
        <div id="carousel">
            <div id="images-carousel" className="carousel slide carousel-dark" data-bs-interval="false" data-bs-ride="false">
                {/* Indicators */}
                <div className="carousel-indicators">
                    {
                        numbersList.map( number => 
                            <button
                            key={number}
                            type="button" 
                            data-bs-target="#images-carousel"
                            data-bs-slide-to={number-1} 
                            aria-label={number} 
                            className={number === 1 ? "active" : ""}
                            ></button>
                            )
                        }
                </div>
            
                {/* Content */}
                <div className="carousel-inner h-100">
                    {
                        numbersList.map( number => (
                            <div
                            key={number}
                            className={`carousel-item ${number === 1 ? "active" : ""}`}
                            >
                                <img
                                    src={`/assets/img/characters/${name.concat(number)}.png`}
                                    className="d-block w-100 img-thumbnail"
                                    alt={number}
                                    style={{height:"600px", objectFit:"contain"}}
                                    onError={setDefaultSrc}
                                    />
                            </div>
                        ))
                    }
                </div>

                {/* Controls */}
                <button name="previous" className="carousel-control-prev" type="button" data-bs-target="#images-carousel" data-bs-slide="prev" onClick={() => setSelected(selected-1)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button name="next" className="carousel-control-next" type="button" data-bs-target="#images-carousel" data-bs-slide="next" onClick={() => setSelected(selected+1)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;
