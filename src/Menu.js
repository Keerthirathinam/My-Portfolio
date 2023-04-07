import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export function Menuone(){
    return(
        <div>
   
            <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-danger">        
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText1" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarText1">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="navbar-brand ml-5" to="/homeone">Home</Link>
      </li>
      {/* <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/card">Congrats Card</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/league">Super Over League</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/socialbuttons">Social Buttons</Link>
      </li> */}
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/notification">Notification</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/login">Login</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/technology">Technology</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/responsive">Responsive</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/fruits">Fruits Counter</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/jsontask">Shoe Product</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/jsontask2">Fake Api</Link>
      </li>
      <li className="nav-item">
      <Link className="navbar-brand ml-5" to="/Portfolio">Portfolio</Link>
      </li>
     
    </ul>
    
  </div>
</nav>
{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-danger m-5" type="button" data-toggle="dropdown" aria-expanded="false">
    Other Task
  </button>
  <div class="dropdown-menu">
    <Link to="/increment" className="dropdown-item" >Increment</Link>
    <Link to="/fruits" className="dropdown-item" >Fruits Counter</Link>
    <Link to="/feedback" className="dropdown-item" >Feedback</Link>
    <Link to='/datetask' className="dropdown-item" >Date Function</Link>   
    <Link to='/jsontask' className="dropdown-item" >Json Task</Link>   
    <Link to='/jsontask2' className="dropdown-item" >Json Task 2</Link>   
  </div>
</div> */}
  </div>
            
</div>
    );
}