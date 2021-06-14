import React from 'react';

import setDefaultSrc from '../utils/setDefaultSrc.js';


function Carousel({ name, images }) {

    let numberImagesList = []
    for(let i = 1; i < parseInt(images)+1; i++) numberImagesList.push(i) 

    return (
        <div id="images-carousel" className="carousel slide carousel-dark" data-bs-interval="false" data-bs-ride="false">
            {/* Indicators */}
            <div className="carousel-indicators">
                {
                    numberImagesList.map( number => 
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
            <div className="carousel-inner">
                {
                    numberImagesList.map( number => (
                        <div
                            key={`${name}${number}`}
                            className={`carousel-item ${number === 1 ? "active" : ""}`}
                        >
                            <img
                                src={`/assets/img/characters/${name.concat(number)}.png`}
                                className="d-block w-100 img-thumbnail"
                                alt={`${name}${number}`}
                                style={{height:"500px", objectFit:"contain"}}
                                onError={setDefaultSrc}
                            />
                        </div>
                    ))
                }
            </div>
            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#images-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#images-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;
