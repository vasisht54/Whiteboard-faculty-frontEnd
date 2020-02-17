import React from "react";
import ModuleItemComponent from "./ModuleItemComponent";

const ModuleListComponent = ({modules}) =>
    <ul className="nav flex-column nav-pills pt-3 wbdv-module-list">
        {
            modules.map(module =>
                <ModuleItemComponent module = {module} />
            )
        }
    </ul>;

export default ModuleListComponent;