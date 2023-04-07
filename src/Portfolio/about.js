import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import girl from "./girl.png";


export function PortAbout(){
    return(
        <>
        <div className="container-fluid pb-5 pl-4 portabout" id="about">
            <h1 className="text-center"><b>About Me</b></h1>
            <div className="row">
            <div className="col-lg-8">
                <div className="row pl-5 pt-5">
                <div className="col-lg-1"/>
                <div className="col-lg-5 p-4 col-10 dskill">
                     <h3 className="gtitle"><b>Developer Skills</b></h3>
                     <p>A great knowledge of HTML / CSS, Javascript and React.js. I make responsive applications with Bootstrap with interactive designs.</p>
                </div>
                <div className="col-lg-1 p-4"/> 
                <div className="col-lg-5 p-4 col-10 dskill">
                     <h3 className="gtitle"><b>Graphic Designer</b></h3>
                     <p>A love for creating powerful visual designs using digital illustrations,images and typography. Proficient in Adobe Photoshop.</p>
                
                </div>
                <div className="row container-fluid about3 justify-content-center m-5">
                    <div className="col-lg-1"/>
                <div className="col-lg-6 p-4 col-12  dskill">
                     <h3 className="gtitle"><b>Social Activist</b></h3>
                     <p>A Mover and Shaker Leaded and took part in many influential social welfare projects through Rotaract club.</p>
                
                </div>
                
                </div>
                
                </div>
                
                </div>
                <div className="col-lg-4 justify-content-center">
                    <div className="row">
                
                <div className="col-lg-12">
                <img src={girl} className="img-fluid" height="480" width="480"/>
                </div>

                </div>
                <div className="col-lg-1"></div>
                
                </div>
                <div className="col-lg-12 text-center">
                    <h2 className="abtquote"><b>Multi-talented. Intuitive. Dedicated.</b></h2>

                </div>
            </div>


        </div>
        </>
    );
}

