import {useState, useEffect} from 'react';
import getSuperheros from '../services/getSuperheros';

// Recibe el nombre y la casa. El objeto loading se devuelve para saber si ya se realizó la búsqueda. El objeto heros devuelve los resultados
const useHeros = ({ name, house }) => {

    const [loading, setLoading] = useState(false)
    const [heros, setHeros] = useState([])

    useEffect(() => {
        setLoading(true)
        const newHeros = getSuperheros({
                            heroName:name,
                            heroHouse:house
                        })
        setHeros(newHeros)
        setLoading(false)
    }, [name, house])
    
    return {loading, heros}
}


export default useHeros