import React from "react";
import NavBarMainComponent from "./NavBarMainComponent";
import SideBarComponent from "./SideBarComponent";
import MainContentComponent from "./MainContentComponent";

const CourseEditorComponent = () =>
       <div className="container-fullwidth">
           <NavBarMainComponent />
           <div className="row">
               <SideBarComponent />
               <div className="col-9">
                   <MainContentComponent/>
               </div>
           </div>
        </div>

export default CourseEditorComponent;