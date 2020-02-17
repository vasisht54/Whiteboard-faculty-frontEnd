import React from "react";
import ModuleItemComponent from "./ModuleItemComponent";

const ModuleListComponent = ({modules}) =>
    <ul className="nav flex-column nav-pills pt-3 wbdv-module-list">
        {
            modules.map(module =>
                <ModuleItemComponent module = {module} />
            )
        }
        <li className="bg-dark">
            <a href="#" className="nav-link">
                <button className="btn float-right btn-add-module wbdv-module-item-add-btn">
                    <i className="fas fa-plus fa-xs"/>
                </button>
            </a>
        </li>
    </ul>;

export default ModuleListComponent;