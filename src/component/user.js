import React from "react";
import {Link} from "react-router-dom";

const User = ()=>{
    return <div>
        <h4>User Profile</h4>
        <label>Alice</label>
        <div className="row">
            <ul className="c">
                <li>name: Alice</li>
                <li>password: ******</li>
                <li>phone No.: 11111111</li>
                <li>Location: seattle</li>
            </ul>
        </div>
        <button type="submit">Update</button>
        <button type="submit">Delete</button>
    </div>
}

export default User