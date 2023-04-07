import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import { Link } from "react-scroll";
import {Link as Linkto} from 'react-router-dom'

export function PortNav(){
    return(
        <>





        <nav class="navbar portnav navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center " id="navbarNavAltMarkup">
    <div class="navbar-nav p-2 ">
      <Link activeClass="active"  to="home" spy={true} smooth={true} duration={500} className="nav-item nav-link active ml-3" >Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}  className="nav-item nav-link active ml-3">About Me</Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}  className="nav-item nav-link active ml-3">Skills</Link>
      <Link activeClass="active" to="certificate" spy={true} smooth={true} duration={500}  className="nav-item nav-link active ml-3">Certifications</Link>
      <Link activeClass="active" to="edu" spy={true} smooth={true} duration={500}  className="nav-item nav-link active ml-3">Education</Link>
      <Linkto to="/jsontask" class="nav-item nav-link active ml-3" >Projects</Linkto>
      <Link activeClass="active" to="footer" spy={true} smooth={true} duration={500}  className="nav-item nav-link active ml-3">Connect</Link>
    </div>
  </div>
</nav>


        </>
    );
}