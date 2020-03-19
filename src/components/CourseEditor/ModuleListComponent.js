import React from "react";
import ModuleItemComponent from "./ModuleItemComponent";
import connect from "react-redux/lib/connect/connect";
import {CREATE_MODULE, DELETE_MODULE} from "../../actions/moduleActions";

const ModuleListComponent = ({modules, createModule, deleteModule}) =>
    <ul className="nav flex-column nav-pills pt-3 wbdv-module-list">
        {
            modules && modules.map(module =>
                <ModuleItemComponent module = {module} deleteModule={deleteModule}/>
            )
        }
        <li className="bg-dark">
            <a href="#" className="nav-link">
                <button onClick={() => createModule('New Module')} className="btn float-right btn-add-module wbdv-module-item-add-btn">
                    <i className="fas fa-plus fa-xs"/>
                </button>
            </a>
        </li>
    </ul>;

const stateToPropertyMapper = (state) => {
    return { modules: state.modules };
};

const dispatchToPropertyMapper = dispatch => {
    return {
        deleteModule: moduleId => {
            dispatch({
                type: DELETE_MODULE,
                moduleId
            })
        },
        createModule: (title) => {
            dispatch(
                {
                    type: CREATE_MODULE,
                    newModule: {title: title, _id: "1234"}
                }
            )
        }
    };
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent);