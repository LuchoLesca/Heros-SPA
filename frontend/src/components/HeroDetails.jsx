// eslint-disable-next-line
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Carousel from './Carousel';

import {capitalize} from 'utils/stringTreatment.js';
import setDefaultSrc from 'utils/setDefaultSrc.js';

import { defaultHouses } from 'utils/defaultObjets';

import MsgModal from './MsgModal';


const HeroDetails = ({ hero, setHero, editing }) => {
    // console.log(editing)

    const history = useHistory()

    const handleChange = (evt) => {
        setHero({
            ...hero,
            [evt.target.name] : evt.target.value.toLowerCase()
        })
    }
    

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
                    <div className="form-group mb-3">
                        <label className="form-label">Superhero Name:</label>
                        <input
                            className="form-control"
                            name="name"
                            value={capitalize(hero.name)}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <img
                            src={`/assets/img/logos/${hero.name}.png`}
                            alt={hero.name}
                            name="logoHero"
                            style={{height:"100px", objectFit:"cover"}}
                            className="img-thumbnail"
                            onError={setDefaultSrc}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Character Name:</label>
                        <input
                            className="form-control"
                            name="alter"
                            value={capitalize(hero.alter)}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">House:</label>
                        <select
                            className="form-select"
                            name="house" value={hero.house}
                            onChange={handleChange}
                            required
                        >
                            {defaultHouses.map(item => (
                                    <option
                                        key={item}
                                        value={item.toLowerCase()}>{item}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group mb-3">   
                        <img
                            src={`/assets/img/logos/${hero.house}.png`}
                            alt={hero.house}
                            name="logoHouse"
                            style={{height:"100px", objectFit:"cover"}}
                            className="img-thumbnail"
                            onError={setDefaultSrc}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Appearance's year:</label>
                        <input 
                            className="form-control"
                            type="number"
                            min={1900}
                            name="appearance"
                            value={hero.appearance.toString()}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Equipment:</label>
                        <input className="form-control" name="equipment" value={capitalize(hero.equipment)} onChange={handleChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Biography:</label>
                        <textarea className="form-control"
                            name="biography" style={{height:"175px", resize:"none"}}
                            value={hero.biography}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Amount Images:</label>
                        <div className="col-2">
                            <input className="form-control" type="number" min="1" name="images" value={hero.images} onChange={handleChange}/>
                        </div>
                    </div>
                    {
                        editing
                            ?   (<div className="form-group mb-3">
                                    <button className="btn btn-dark" onClick={ history.goBack }>Back</button>
                                    <button className="btn btn-warning mx-2" name="update" onClick={() => MsgModal({btnName: "update", hero})}>Update</button>
                                    <button className="btn btn-danger" name="delete" onClick={() => MsgModal({btnName: "delete", hero})}>Delete</button>
                                </div>)
                            :   (<div className="form-group mb-3">
                                    <button className="btn btn-dark" onClick={ history.goBack }>Back</button>
                                    <button className="btn btn-warning mx-2" name="Add" onClick={() => MsgModal({btnName: "add", hero})}>Add</button>
                                </div>)
                            
                    }
{/* 
                    <div className="form-group mb-3">
                        <button className="btn btn-dark" onClick={ history.goBack }>Back</button>
                        <button className="btn btn-warning mx-2" name="update">Update</button>
                        <button className="btn btn-danger" name="delete">Delete</button>
                    </div>
                     */}
                </div>
            </div>
        </div>
    );
}

export default HeroDetails;