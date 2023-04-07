import React from "react";
import study from "./study.png";
import { BoxIconElement } from "boxicons";



export function Education(){
return(
    <>

    <div className="container-fluid education pb-5 pt-5" id="edu">
    <h1 className="text-white text-center"><b>Educational Details</b></h1>
        <div className="row">
           
                <div className="col-lg-6 pl-5 col-10">
                <img src={study} className="col-lg-9  ml-5 eimage" />
            </div>
            <div className="col-lg-6">
            <div className=" pl-5 pt-5">
                <div className="col-lg-1"/>
                <div className="col-lg-10 p-4 col-10 deducation">
                     <h3 className="etitle"><b>Bachelor's Degree</b></h3>
                     <p><span className="edufont">College Name :</span> United Institute of Technology <br/><span className="edufont">Department :</span> Computer Science Engineering <br/><span className="edufont">Percentage :</span> 86%</p>
                  
                    
                </div>
                <div className="col-lg-1 p-4"/> 
                <div className="col-lg-10 p-4 col-10 deducation">
                <h3 className="etitle"><b>Higher secondary School</b></h3>
                     <p><span className="edufont">School Name :</span> St. John Bosco Matriculation Higher Secondary School <br/><span className="edufont">Percentage :</span> 62%</p>
                
                </div>
                <div className="col-lg-1 p-4"/> 
                <div className="col-lg-10 p-4 col-10 deducation">
                <h3 className="etitle"><b>Secondary School Leaving Certificate</b></h3>
                     <p><span className="edufont">School Name :</span> St. John Bosco Matriculation Higher Secondary School <br/><span className="edufont">Percentage :</span> 79%</p>
                
                </div>
                <div className="col-lg-10 p-5 col-10 text-center">
                

                </div>
               
                
                </div>
            </div>
            <div className="col-lg-1"/>
          
        </div>
      
        
        <hr className="bg-secondary"/>

        <footer id="footer">
    <div class="container-fluid text-secondary">
      <h3>Contact Me</h3>
      {/* <p>“ Code is like humor. When you have to explain it, it’s bad.”</p> */}
      <div class="social-links">

        <a href="https://github.com/keerthirathinam" class="github"><i class="bx bxl-github"></i></a>
        {/* <a href="https://www.instagram.com/ig_keerthana/" class="instagram"><i class="bx bxl-instagram"></i></a> */}
        <a href="mailto:keerthirathinam01@gmail.com" class="google-plus"><i class="bx bxl-gmail"></i></a>
        <a href="https://www.linkedin.com/in/keerthanabe" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      <div class="copyright">
        &copy; Copyright <strong><span>@2023 Keerthana</span></strong>. All Rights Reserved
      </div>
      </div>
    </footer>








    </div>
    </>
);
}