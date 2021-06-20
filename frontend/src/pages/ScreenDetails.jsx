import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import HeroDetails from 'components/HeroDetails';

import { getHero } from 'services/db_functions';
import { defaultHero } from 'utils/defaultObjets';


const ScreenDetails = () => {  
    const id = useParams().id

    const [loading, setLoading] = useState(false)
    const [heroData, setHero] = useState(defaultHero)

    useEffect(() => {
        const fetchData = async() => {
            const res = await getHero(id)
            setHero(res.data)
        }
        setLoading(true)
        fetchData()
        setLoading(false)
    }, [id])
    
    return(
        <>
            {loading
                ? <Loading/>
                : <HeroDetails hero={heroData}/>
            }
        </>
    )
}

export default ScreenDetails;