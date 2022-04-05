import '../App.css';
import axios from 'axios';
import {useState, useEffect } from 'react';
import { baseURL, keyConnect, apiKey, villagersURL } from '../KeyStorage';

function Villagers() {

    const [villagerData, setVillagerData] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}${villagersURL}${keyConnect}${apiKey}`)
            .then(response => {
                //filtering between this and response.data consoled
                    const responseData = response.data;
                    // const filterForAce = responseData.filter(findAce => findAce.name === "Ace")
                    // console.log(filterForAce)
                    //correctly filters for all NH appearances!
                    const filter = "NH";
                    const filteredResult = responseData.filter((person) => { 
                        return (person.appearances.indexOf(filter) >= 0)
                    })

                // console.log(filteredResult)
                // console.log(response.data)
                setVillagerData(filteredResult)
                return villagerData
            })
            .catch(error => {
                console.error(error)
            })
    },[])

    // console.log(villagerData)

    // const filtered = villagerData.filter(species => species.species === 'Bird')
    // setVillagerData(filtered)
    // console.log(filtered)


                //RETURN BELOW HERE
                //RETURN BELOW HERE
                //RETURN BELOW HERE
    return (
        <div className="Villager-container">

            I am the villager list

            {villagerData.map(individual => {
                return(
                    <div individual={individual} key={individual.url}>
                        <img src={individual.image_url} alt="villager profile" width={50} length={100}/>
                        <p>{individual.name}</p>
                        <p>{individual.species}</p>
                        <p>{individual.personality}</p>
                        <p>{individual.birthday_month} {individual.birthday_day}</p>
                        <p>---</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Villagers