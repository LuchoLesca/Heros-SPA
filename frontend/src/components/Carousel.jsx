import React from 'react';

import setDefaultSrc from 'helpers/setDefaultSrc.js';


function Carousel({ name, images }) {

    let numbersList = []
    for(let i = 1; i <= images; i++) numbersList.push(i)
 
   
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
                <button name="previous" className="carousel-control-prev" type="button" data-bs-target="#images-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button name="next" className="carousel-control-next" type="button" data-bs-target="#images-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;
