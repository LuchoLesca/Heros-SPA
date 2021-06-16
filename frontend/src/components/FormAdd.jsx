import React from 'react'

import { useHistory } from 'react-router-dom';

import saveHero from 'services/saveHero';
import { capitalize } from 'utils/stringTreatment.js';
import setDefaultSrc from 'utils/setDefaultSrc.js';
import { defaultHouses } from 'utils/defaultObjets';




const FormAdd = ({ hero, setHero }) => {  
    const history = useHistory()

    const handleChange = (evt) => {
        setHero({
            ...hero,
            [evt.target.name] : evt.target.value.toLowerCase()
        })
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label className="form-label">Superhero Name:</label>
                <input className="form-control" name="name" value={capitalize(hero.name)} onChange={handleChange} required/>
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
                <input className="form-control" name="alter" value={capitalize(hero.alter)} onChange={handleChange}/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">House:</label>
                <select className="form-select" name="house" value={hero.house || "marvel"} onChange={handleChange} required>
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
                    src={`/assets/img/logos/${hero.house || "marvel"}.png`}
                    alt={hero.house}
                    name="logoHouse"
                    style={{height:"100px", objectFit:"cover"}}
                    className="img-thumbnail"
                    onError={setDefaultSrc}
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Appearance's year:</label>
                <input className="form-control" type="number" min="1900" name="appearance" value={hero.appearance} onChange={handleChange} required/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Equipment:</label>
                <input className="form-control" name="equipment" value={capitalize(hero.equipment)} onChange={handleChange}/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Biography:</label>
                <textarea className="form-control" name="biography" style={{height:"175px", resize:"none"}} value={hero.biography} onChange={handleChange} required/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Amount Images:</label>
                <div className="col-2">
                    <input className="form-control" type="number" min="1" name="images" value={hero.images} onChange={handleChange} required/>
                </div>
            </div>
            <div className="form-group mb-3">
                <button className="btn btn-dark" onClick={() => history.goBack()}>Back</button>
                <button className="btn btn-success ms-2" name="add" onClick={() => {saveHero(hero)}}
                >Add</button>
            </div>
        </form>
    )
}

export default FormAdd;
