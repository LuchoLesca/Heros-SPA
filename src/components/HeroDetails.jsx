import React from 'react';
import { useHistory } from 'react-router-dom';

import MsgModal from './MsgModal';

import {capitalize} from '../utils/stringTreatment.js';


const HeroDetails = ({ hero }) => {

    const history = useHistory()    // Utilizado para volver a la ruta anterior
  
    // Creacion de la lista de items de carrusel
    const {name, alter, appearance, house, biography, equipment, images} = hero
    
    let numberImagesList = []
    for(let i=1; i<images+1; i++) numberImagesList.push(i)


    return ( 
        <div className="Details container-fluid p-5">
            <div className="row mx-5">
                <div className="col-6 p-5">
                    
                    <div id="images-carousel" className="carousel carousel-dark" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {
                                numberImagesList.map( number => (
                                    <div
                                        key={`${name}${number}`}
                                        className={`carousel-item ${number === 1 ? "active" : ""}`}
                                    >
                                        <img
                                            src={`../assets/img/characters/${name}${number}.png`}
                                            className="d-block w-100"
                                            alt={`${name}${number}`}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#images-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#images-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="col-6 p-5">
                    <div className="form-group mb-3">
                        <label className="form-label">Superhero Name:</label>
                        <input className="form-control" type="text" placeholder="Superhero name" name="hero" defaultValue={capitalize(name)}/>
                    </div>

                    <div className="form-group mb-3">
                        <img src={`../assets/img/logos/${name || "default"}.png`} alt="default" style={{width:"100px", height:"100px", objectFit:"cover"}}/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Character Name:</label>
                        <input className="form-control" type="text" placeholder="Character name" name="character" defaultValue={capitalize(alter)}/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">House:</label>
                        <select className="form-select" name="house">
                            <option value="marvel">Marvel</option>
                            <option value="dc">DC</option>
                        </select>
                    </div>

                    <div className="form-group mb-3">    
                        <img src={`../assets/img/logos/${house}.png`} alt={house} style={{maxWidth:"150px"}}/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Appearance's year:</label>
                        <input className="form-control" type="text" placeholder="Ej.: 1998" name="years" defaultValue={appearance}/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Equipment:</label>
                        <input className="form-control" type="text" placeholder="Insert Equipment" name="equipment" defaultValue={capitalize(equipment)}/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Biography:</label>
                        <textarea className="form-control" type="text" name="biography" style={{height:"175px", resize:"none"}} defaultValue={biography}/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Amount Images:</label>
                        <div className="col-2">
                            <input className="form-control" type="number" min="1" defaultValue={`${images.length}`} name="images"/>
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <button className="btn btn-dark" onClick={() => history.goBack()}>Back</button>
                        <button className="btn btn-warning mx-2" onClick={MsgModal}>Update</button>
                        <button className="btn btn-danger" onClick={MsgModal}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroDetails;