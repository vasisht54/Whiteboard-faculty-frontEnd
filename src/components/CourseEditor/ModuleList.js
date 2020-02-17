import React from "react";
import {ModuleItem} from "./ModuleItem";

export const ModuleList = ({modules}) =>
    <ul className="nav flex-column nav-pills pt-3 wbdv-module-list">
        {
            modules.map(module =>
                <ModuleItem module = {module} />
            )
        }
    </ul>;