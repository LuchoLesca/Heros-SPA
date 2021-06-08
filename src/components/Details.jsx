import React from 'react';
import ImageLittle from "./ImageLittle";
import ImageLarge from "./ImageLarge";

const Details = () => {
    return (
        <div className="Details container-fluid p-5">
            <div className="row mx-5">
                <div className="col-6 p-5">
                    <ImageLarge src="https://cdn.sstatic.net/Img/unified/sprites.svg?v=e5e58ae7df45" />
                </div>
                <div className="col-6 p-5">
                    <div className="form-group mb-3">
                        <label className="form-label">Superhero Name:</label>
                        <input className="form-control" type="text" placeholder="Superhero name" name="hero"/>
                    </div>

                    <div className="form-group mb-3">
                        <ImageLittle src="../data/default.png"/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Character Name:</label>
                        <input className="form-control" type="text" placeholder="Character name" name="character"/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">House:</label>
                        <select className="form-select" name="house">
                            <option value="marvel">Marvel</option>
                            <option value="dc">DC</option>
                        </select>
                    </div>

                    <div className="form-group mb-3">    
                        <ImageLittle src="../data/default.png"/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Appearance's year:</label>
                        <input className="form-control" type="text" placeholder="Ej.: 1998" name="years"/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Equipment:</label>
                        <input className="form-control" type="text" placeholder="Insert Equipment" name="equipment"/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Biography:</label>
                        <textarea className="form-control" type="text" name="biography" style={{height:"175px", resize:"none"}}/>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Amount Images:</label>
                        <div className="col-2">
                            <input className="form-control" type="number" name="images"/>
                        </div>
                    </div>

                    <div className="form-group mb-3">
                        <button className="btn btn-dark">Back</button>
                        <button className="btn btn-warning mx-2">Update</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;