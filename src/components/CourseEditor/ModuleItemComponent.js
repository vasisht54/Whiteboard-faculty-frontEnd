import React from "react";

const ModuleItemComponent = ({module, deleteModule}) =>
    <li className="nav-item bg-dark pl-3 wbdv-module-item">
        <a href="#" className="nav-link list-group-item my-2 font-weight-bolder wbdv-module-item-title">
            {module.title}
            <button onClick={() => deleteModule(module._id)} type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                X
            </button>
        </a>
    </li>;
export default ModuleItemComponent;