import React from "react";
import ModuleListComponent from "./ModuleListComponent";

const SideBarComponent = () =>
    <div className="col-3 bg-dark wbdv-side-bar">
        <ModuleListComponent
            modules = {[
            {title: "Module 1 - jQuery"},
            {title: "Module 2 - React"},
            {title: "Module 3 - Redux"},
            {title: "Module 4 - Native"},
            {title: "Module 5 - Angular"},
            {title: "Module 6 - Node"},
            {title: "Module 7 - Mongo"}
        ]} />
    </div>;
export default SideBarComponent;