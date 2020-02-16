import React from "react";
import {NavBarMain} from "./NavBarMain";
import {SideBar} from "./SideBar";
import {MainContent} from "./MainContent";

const CourseEditor = () =>
       <div className="container-fullwidth">
           <NavBarMain />
           <div className="row">
               <SideBar />
               <div className="col-9">
                   <MainContent/>
               </div>
           </div>
        </div>

export default CourseEditor;