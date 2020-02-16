import React from "react";
import {ModuleList} from "./ModuleList";
import {NavBarMain} from "./NavBarMain";
import {SideBar} from "./SideBar";

const CourseEditor = () =>
       <div className="container-fullwidth">
           <NavBarMain />
           <div className="row">
                <SideBar />
                <div className="col-8">
                    <h4>Lesson Tabs</h4>
                    <ul>
                        <li>Lesson 1</li>
                        <li>Lesson 2</li>
                        <li>Lesson 3</li>
                    </ul>
                </div>
            </div>
    </div>

export default CourseEditor;