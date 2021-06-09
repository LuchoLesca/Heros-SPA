import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../components/Loading';

import getSuperheros from '../services/getSuperheros';
import HeroDetails from '../components/HeroDetails';


const heroDefault = { 
    "name": "",
    "alter": "",
    "appearance": 0,
    "house": "",
    "biography": "",
    "equipment": "",
    "images": []
}


const ScreenDetails = () => {
  
    const params = useParams()

    const [heroData, setHero] = useState(heroDefault)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const response = getSuperheros({heroName:params.name})[0] || heroDefault
        setHero(response)

        setLoading(false)
    }, [params.name])

    
    return(
        <>
            {loading
                ? <Loading/>
                : <HeroDetails hero={heroData} />
            }
        </>
    )
}

export default ScreenDetails;