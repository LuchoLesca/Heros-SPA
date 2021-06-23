import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import Carousel from 'components/Carousel';
import Form from 'components/Form';

import { getHero } from 'services/db_functions';
import { defaultHero } from 'utils/defaultObjets';


const ScreenDetails = () => {  
    const id = useParams().id

    const [editing, setEditing] = useState(true)
    const [loading, setLoading] = useState(true)
    const [heroData, setHero] = useState()

    useEffect(() => {
        const fetchHeroData = async() => {
            const res = await getHero(id)
            const data = res ? res.data : defaultHero
            setHero(data)
            setLoading(false)
        }
                
        if (id){
            fetchHeroData()
            setEditing(true)
        }else{
            setHero(defaultHero)
            setEditing(false)
            setLoading(false)
        }
    }, [id])
    

    return(
        <>
            {loading
                ? <Loading/>
                : (
                    <div className="Details container-fluid">
                        <div className="row">
                            {/* Carousel */}
                            <div className="col-6">
                                <Carousel
                                    name={heroData.name}
                                    images={parseInt(heroData.images)}
                                />    
                            </div>
                            {/* Form */}
                            <div className="col-6">
                                <Form
                                    hero={heroData}
                                    setHero={setHero}
                                    editing={editing}
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ScreenDetails;