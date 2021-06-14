import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import HeroDetails from 'components/HeroDetails';

import getHero from 'services/getHero';
import { defaultHero } from 'utils/defaultObjets';


const ScreenDetails = () => {  
    const { name } = useParams()

    const [loading, setLoading] = useState(false)
    const [heroData, setHero] = useState(defaultHero)

    useEffect(() => {
        setLoading(true)
        const response = getHero(name)
        setHero(response)
        setLoading(false)
    }, [name])
    
    return(
        <>
            {loading
                ? <Loading/>
                : <HeroDetails heroData={heroData} />
            }
        </>
    )
}

export default ScreenDetails;