import React from "react";
import ModuleItemComponent from "./ModuleItemComponent";
import connect from "react-redux/lib/connect/connect";
import {
    createModule,
    deleteModule, FIND_MODULES_FOR_COURSE
} from "../../actions/moduleActions";
import moduleService from "../../services/ModuleService";

class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse()
    }

    render() {
        return (
            <ul className="nav flex-column nav-pills pt-3 wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(module =>
                        <ModuleItemComponent module = {module} deleteModule={this.props.deleteModule}/>
                    )
                }
                <li className="bg-dark">
                    <a href="#" className="nav-link">
                        <button onClick={() => this.props.createModule({title: 'New Module'})}
                                className="btn float-right btn-add-module wbdv-module-item-add-btn">
                            <i className="fas fa-plus fa-xs"/>
                        </button>
                    </a>
                </li>
            </ul>
        )
    }
}


const stateToPropertyMapper = (state) => {
    return { modules: state.modules };
};

const dispatchToPropertyMapper = dispatch => {
    return {
        findModulesForCourse: () => {
            moduleService.findModulesForCourse("4EudFNiWn0Ov0tJz")
                .then(actualModules =>
                    dispatch({
                        type: FIND_MODULES_FOR_COURSE,
                        modules: actualModules
                    }))
        },
        deleteModule: moduleId => {
            moduleService.deleteModule(moduleId)
                .then(response =>
                    dispatch(deleteModule(moduleId))
                )
        },
        createModule: (module) => {
            moduleService.createModule(module)
                .then(response =>
                    dispatch(createModule(module))
                )
        }
    };
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent);