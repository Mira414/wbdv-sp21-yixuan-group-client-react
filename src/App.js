import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./component/home"
import Admin from "./component/admin"
import AdminTwo from "./component/admin-two";
import Pet from "./component/pet";
import User from "./component/user";

function App() {
  return (
    <div className="App">
      <h4></h4>
      <BrowserRouter>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/admin" exact={true} component={Admin}></Route>
        <Route path="/admin-two" exact={true} component={AdminTwo}></Route>
        <Route path="/pet" exact={true} component={Pet}></Route>
        <Route path="/user" exact={true} component={User}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
