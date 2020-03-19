import React from "react";
import NavBarMainComponent from "./NavBarMainComponent";
import SideBarComponent from "./SideBarComponent";
import MainContentComponent from "./MainContentComponent";
import {createStore} from "redux";
import {Provider} from "react-redux";

const CourseEditorComponent = ({closeEditor}) =>
       <div className="container-fullwidth">
           <NavBarMainComponent closeEditor = {closeEditor}/>
           <div className="row">
               <SideBarComponent />
               <div className="col-9">
                   <MainContentComponent/>
               </div>
           </div>
        </div>;

export default CourseEditorComponent;