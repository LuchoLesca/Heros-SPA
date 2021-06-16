import {useState, useEffect} from 'react';

import getHero from 'services/getHero';

const useHero = (name) => {

    const [loading, setLoading] = useState(false)
    const [heroData, setHero] = useState({})

    useEffect(() => {
        setLoading(true)
        const response = getHero(name)
        setHero(response)
        setLoading(false)
    }, [name])
    
    return {loading, heroData}
}


export default useHero