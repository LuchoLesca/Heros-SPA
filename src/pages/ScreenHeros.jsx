import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import Loading from '../components/Loading';
import ListHeros from '../components/ListHeros';

import getSuperheros from '../services/getSuperheros';


const HerosSearching = () => {

    const history = useHistory()
    const house = history.location.pathname.split("/")[history.location.pathname.split("/").length - 1]
    
    const [loading, setLoading] = useState(false)
    const [heros, setHeros] = useState([])

    useEffect(() => {
        setLoading(true)

        const response = getSuperheros({ heroHouse:house })
        setHeros(response)

        setLoading(false)
    }, [house])

    
    return <>
            {loading
                ?   <Loading />
                :   <ListHeros heros={heros}/>
            }
          </>
}

export default HerosSearching;