import React, { useState, useEffect , useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Context from 'context/SearchContext';

import Loading from 'components/Loading';
import ListHeros from 'components/ListHeros';

import getHeros from 'services/getHeros';
import { dynamicSort } from 'utils/sort';


const HerosSearching = () => {
    
    const { name } = useContext(Context)
    const history = useHistory()
    const house = history.location.pathname.split("/")[history.location.pathname.split("/").length - 1]
    
    const [loading, setLoading] = useState(false)
    const [heros, setHeros] = useState([])

    useEffect(() => {
        setLoading(true)
        const response = getHeros({heroName:name, heroHouse:house }).sort(dynamicSort("name"))
        setHeros(response)
        setLoading(false)
    }, [name, house])

    return (
        <>
            {loading
                ?   <Loading />
                :   <ListHeros heros={heros}/>
            }
        </>
    )
}

export default HerosSearching;