import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import SearchContext from '../../context/SearchContext';

const Navbar = () => {
    const {name, setName} = useContext(SearchContext)

    const handleInput = (evt) => {
        setName(evt.target.value)
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Superheros</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/marvel">Marvel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/dc">DC</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link me-2" to="/add">Add Hero</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={name} onChange={handleInput}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;