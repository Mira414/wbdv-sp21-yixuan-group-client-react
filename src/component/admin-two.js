import React from "react"
import {Link} from "react-router-dom";

const AdminTwo = ()=>{
    return <div>
        <nav className="navbar navbar-expand-lg wm-Nav-Bar">
            <h3>
                    Administration Page
            </h3>
        </nav>

        <div>
            <label>user list</label>
            <input placeholder="search user"/>
            <button type="submit">Search</button>
            <button type="submit">Create</button>
        </div>
        <table className="table">
            <thead>
            <tr>
                <th>Username</th>
                <th>password</th>
                <th>reported pets</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alice</td>
                    <td>*****</td>
                    <td><Link to="/pet">2</Link></td>
                    <td>Seattle</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>*****</td>
                    <td>1</td>
                    <td>SF</td>
                </tr>
                <tr>
                    <td>Ironman</td>
                    <td>*****</td>
                    <td>3</td>
                    <td>LA</td>
                </tr>
            </tbody>
        </table>
        <div>
            <label>pet list</label>
            <input placeholder="search pets"/>
            <button type="submit">Search</button>
            <button type="submit">Report</button>
        </div>
        <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>type</th>
                <th>breed</th>
                <th>owner</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1111</td>
                    <td>type111</td>
                    <td>breed111</td>
                    <td><Link to="/user">Alice</Link></td>
                </tr>
                <tr>
                    <td>2222</td>
                    <td>type22</td>
                    <td>breed22</td>
                    <td>owner2222</td>
                </tr>
                <tr>
                    <td>Ironman</td>
                    <td>*****</td>
                    <td>3</td>
                    <td>LA</td>
                </tr>
            </tbody>
        </table>

        <label>All info</label>
        <div className="row">
            <div className="col-4"><Link to="/user">Alice</Link></div>
            <div className="col-8">
                <ul>
                    <li><Link to="/pet">Pet 1</Link></li>
                    <li><Link to="/pet">Pet 2</Link></li>
                </ul>
            </div>
            <p />
            <div className="col-4"><Link to="/user">John</Link></div>
            <div className="col-8">
                <ul>
                    <li><Link to="/pet">Pet 1</Link></li>
                    <li><Link to="/pet">Pet 2</Link></li>
                </ul>
            </div>
        </div>

    </div>
}

export default AdminTwo