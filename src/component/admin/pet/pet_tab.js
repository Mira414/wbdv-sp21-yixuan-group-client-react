import React,{useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import petService from "../../../services/pet-service"
import userService from "../../../services/user-service"
import PetDetail from "./pet-detail";
import NavBar from "../nav-bar";


const PetTab = ()=>{

    const {userId, petId} = useParams()
    const [pets, setPets] = useState([])
    const [userName, setUserName] = useState("")

    useEffect(()=>{
        console.log("petid="+petId)
        if(petId === "undefined" || typeof petId === "undefined") {
            petService.findPetsForUser(userId).then(pets => setPets(pets))
            userService.findUserById(userId).then(user => setUserName(user.username))
        }
        else{
            petService.findPetById(petId).then(pet => {
                // console.log(JSON.stringify(pet))
                setPets(new Array(pet))
            })
        }
    }, [])

    return <>
            <NavBar />
            <div className="auth-inner">
                <h3>Reported Pet By <label className="font-italic font-weight-bold">{userName}</label></h3>

            {/*<ul className="nav nav-tabs">*/}
            <div className="row">
                {
                    pets.map(pet=>
                        // <li className={`nav-item`} key={pet.petId}>
                            <PetDetail pet={pet}/>)
                        // </li>)
                }
            {/*</ul>*/}
            </div>
        </div>
    </>
}

export default PetTab