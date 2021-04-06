import React from "react";
import {Link} from "react-router-dom";

const Pet = ()=>{
    return <div>
        <h4>Reported Pet</h4>
        <label>pet 1</label>
        <div className="row">
            <div className="c">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1955939207,2121848497&fm=26&gp=0.jpg"
                     width="100" height="150"/>
            </div>
            <ul className="c">
                <li>name: Bob</li>
                <li>type: sdfds</li>
                <li>color: black and white</li>
                <li>breed: sdfsd</li>
                <li>owner: <Link to="/user">Alice</Link></li>
                <li>Contact info: 123456789</li>
            </ul>
        </div>
        <label>pet 2</label>
        <div className="row">
            <div className="c">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1955939207,2121848497&fm=26&gp=0.jpg"
                     width="100" height="150"/>
            </div>
            <ul className="c">
                <li>name: Bob</li>
                <li>type: sdfds</li>
                <li>color: black and white</li>
                <li>breed: sdfsd</li>
                <li>owner: Alice</li>
                <li>Contact info: 123456789</li>
            </ul>
        </div>
        <button type="submit">Update</button>
        <button type="submit">Delete</button>
    </div>
}

export default Pet