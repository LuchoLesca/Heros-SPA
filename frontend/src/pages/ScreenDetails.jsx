import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import HeroDetails from 'components/HeroDetails';

import { getHero } from 'services/db_functions';
import { defaultHero } from 'utils/defaultObjets';


const ScreenDetails = () => {  
    const id = useParams().id

    const [editing, setEditing] = useState(true)
    const [loading, setLoading] = useState(false)
    const [heroData, setHero] = useState(defaultHero)

    useEffect(() => {
        const fetchHeroData = async() => {
            const res = await getHero(id)
            const data = res ? res.data : defaultHero
            setHero(data)
        }
        
        setLoading(true)

        if (id){
            fetchHeroData()
            setEditing(true)
        }else{
            setHero(defaultHero)
            setEditing(false)
        }

        setLoading(false)
    }, [id, editing])
    
    return(
        <>
            {loading
                ? <Loading/>
                : <HeroDetails hero={heroData} setHero={setHero} editing={editing}/>
            }
        </>
    )
}

export default ScreenDetails;