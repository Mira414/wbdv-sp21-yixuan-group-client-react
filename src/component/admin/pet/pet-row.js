import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";

import userService from "../../../services/user-service"

const PetRow = ({pet})=>{

    const [userName, setUserName] = useState()

    useEffect(()=>{
        userService.findUserById(pet.userId).then(user=>setUserName(user.username))
    }, [])

    return <>
        <tr>
            <td><Link to={`/users/${pet.userId}/pets/${pet.petId}`}>{pet.name}</Link></td>
            <td>{pet.breed}</td>
            <td>{pet.gender}</td>
            <td>{pet.age}</td>
            <td>{pet.status}</td>
            <td><Link to={`/users/${pet.userId}`}>{userName}</Link></td>
            <td><i className="fas fa-times float-right" /></td>
        </tr>
    </>
}

export default PetRow