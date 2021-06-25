import React from 'react'

import { useHistory } from 'react-router-dom';

import { capitalize, capitalizeBegin} from 'helpers/stringTreatment.js';
import setDefaultSrc from 'helpers/setDefaultSrc.js';
import { defaultHouses } from 'helpers/defaultObjets';

import MsgModal from './MsgModal';
import swal from 'sweetalert';


function Form({ hero, setHero, editing }) {

    const history = useHistory()

    const handleChange = (evt) => {
        setHero({
            ...hero,
            [evt.target.name] : evt.target.value.toLowerCase().trimStart()
        })
    }

    const handleBtnClick = (evt) => {
        const name = evt.target.name

        if (name === "delete"){
            MsgModal({btnName:name, hero:hero})
        }else{
            const fieldsToBeCompleted = incompleteFields()
            const form_complete = (fieldsToBeCompleted.length === 0)
            if (form_complete) {
                MsgModal({btnName:name, hero:hero})
            } else {
                swal("Required Fields", `You must complete de following fields: ${fieldsToBeCompleted.join(', ')}`, "warning", {button: "Continue"});
            }
        }
    }

    const incompleteFields = () => {
        const mayBeIncomplete = ["alter", "equipment"]
        let missingFields = []
        for (let atr in hero){
            if(!hero[atr] && !mayBeIncomplete.includes(atr)){
                missingFields.push(atr)
            }
        }
        return missingFields
    }

    
    return (
        <>
            <div className="form-group mb-3">
                <label className="form-label">Superhero Name:</label>
                <input
                    className="form-control"
                    name="name"
                    value={capitalize(hero.name)}
                    onChange={handleChange}
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
                    value={capitalizeBegin(hero.biography)}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Amount Images:</label>
                <div className="col-2">
                    <input className="form-control" type="number" min="1" name="images" value={hero.images} onChange={handleChange}/>
                </div>
            </div>
            
            <div className="form-group mb-3">
                <button className="btn btn-dark" onClick={ history.goBack }>Back</button>
                {
                    editing
                        ?   (   
                                <>
                                    <button className="btn btn-warning mx-2" name="update" onClick={handleBtnClick}>Update</button>
                                    <button className="btn btn-danger" name="delete" onClick={handleBtnClick}>Delete</button>
                                </>
                            )
                        :   (
                                <button className="btn btn-warning mx-2" name="add" onClick={handleBtnClick}>Add</button>
                            )
                }
                            
            </div>   
        </>
    )
}

export default Form
