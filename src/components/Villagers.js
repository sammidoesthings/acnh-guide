import '../App.css';
import axios from 'axios';
import {useState, useEffect } from 'react';
import { baseURL, keyConnect, apiKey, villagersURL } from '../KeyStorage';

function Villagers() {

    const [villagerData, setVillagerData] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}${villagersURL}${keyConnect}${apiKey}`)
            .then(response => {
                // console.log(response.data)
                setVillagerData(response.data)
                return villagerData
            })
            .catch(error => {
                console.error(error)
            })
    },[])


    console.log(villagerData)




                //RETURN BELOW HERE
                //RETURN BELOW HERE
                //RETURN BELOW HERE
    return (
        <div className="Villager-container">

            I am the villager list

            {villagerData.map(individual => {
                return(
                    <div individual={individual} key={individual.url}>
                        <p>{individual.name}</p>
                        <p>{individual.species}</p>
                        <p>{individual.personality}</p>
                        <p>{individual.appearances}</p>
                        <p>---</p>
                    </div>
                )
            })}


        </div>
    )
}

export default Villagers