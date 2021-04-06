import React from "react"

const Admin = ()=>{
    return <div>
        <nav className="navbar navbar-expand-lg wm-Nav-Bar">
            <h3>
                    Administration Page
            </h3>
        </nav>

        <div className="row">
            <div className="col-3 wm-module">
                <ul className="list-group">
                    <a className="list-group-item wm-group-item">
                        User 1
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        User 2
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item active">
                        User 3
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        User 4
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        User 5
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        User 6
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-group-item">
                        User 7 
                        <i className="fas fa-times float-right"></i>
                    </a>
                    <a className="list-group-item wm-User wm-plus" href="#">
                        <i className="fas fa-plus fa-2x float-right text-white"></i>
                    </a>
                </ul>
            </div>
            <div className="col-9">
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link active" aria-current="page" href="#">Pet  1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link" href="#">Pet  2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link" href="#">Pet  3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link" href="#">Pet  4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wm-pill-link" href="#">
                                <i className="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <br />
                <div className="row">
                    <div className="col-3">
                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1955939207,2121848497&fm=26&gp=0.jpg"
                             width="100" height="150"/>
                    </div>
                        <ul className="col">
                            <li>name: Bob</li>
                            <li>type: sdfds</li>
                            <li>color: black and white</li>
                            <li>breed: sdfsd</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Admin