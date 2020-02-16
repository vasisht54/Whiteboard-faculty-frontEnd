import React from "react";
import {ModuleList} from "./ModuleList";
import {NavBarMain} from "./NavBarMain";

const CourseEditor = () =>
       <div>
           <NavBarMain />
           <div className="row">
                <div className="col-4">
                    <h4>Module List</h4>
                    <ModuleList/>
                </div>
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