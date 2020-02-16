import React from "react";

export const ModuleList = ({modules}) =>
    <ul className="nav flex-column nav-pills pt-3 wbdv-module-list">
        {
            modules.map(module =>
                <li className="nav-item bg-dark pl-3 wbdv-module-item">
                    <a href="#" className="nav-link list-group-item my-2 font-weight-bolder wbdv-module-item-title">
                        {module.title}
                        <button type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                            X
                        </button>
                    </a>
                </li>
            )
        }
    </ul>;