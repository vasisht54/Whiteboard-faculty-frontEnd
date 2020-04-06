import React from "react";
import ModuleItemComponent from "./ModuleItemComponent";
import connect from "react-redux/lib/connect/connect";
import {
    createModule,
    deleteModule,
    findModulesForCourse
} from "../../actions/moduleActions";
import moduleService from "../../services/ModuleService";
import lessonService from "../../services/LessonService";
import {findLessonsForModule} from "../../actions/lessonActions";

class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId);
    }

    render() {
        return (
            <ul className="nav flex-column nav-pills pt-3 wbdv-module-list">
                {
                    this.props.modules && this.props.modules.map(module =>
                        <ModuleItemComponent {...this.props}
                                             courseId = {this.props.courseId}
                                             key={module._id}
                                             module = {module}
                                             editModule={this.props.editModule}
                                             deleteModule={this.props.deleteModule}/>
                    )
                }
                <li className="bg-dark" key={this.props.courseId}>
                    <a href="#" className="nav-link">
                        <button onClick={() =>
                            this.props.createModule(this.props.courseId,
                            {title: 'New Module'})}
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
    return { modules: state.modules.modules };
};

const dispatchToPropertyMapper = dispatch => {
    return {
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(actualModules =>
                    dispatch(findModulesForCourse(actualModules)))
        },
        deleteModule: moduleId => {
            moduleService.deleteModule(moduleId)
                .then(response =>
                    dispatch(deleteModule(moduleId))
                )
        },
        createModule: (courseId, module) => {
            moduleService.createModule(courseId, module)
                .then(response =>
                    dispatch(createModule(response))
                )
        },
        findLessonsForModule: async(moduleId) => {
            const actualLessons = await lessonService.findLessonsForModule(moduleId);
            dispatch(findLessonsForModule(actualLessons));
        },
        editModule: (module) => {
            console.log(module);
            moduleService.updateModule(module._id, module)
                .then(response =>
                    moduleService.findModulesForCourse(module._courses)
                        .then(actualModules => {
                            dispatch(findModulesForCourse(actualModules))
                        }
                    )

                )
        }
    };
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent);