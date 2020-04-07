import React from "react";
import NavBarMainComponent from "./NavBarMainComponent";
import SideBarComponent from "./SideBarComponent";
import MainContentComponent from "./MainContentComponent";

class CourseEditorComponent extends React.Component {
    render() {
        return (
            <div className="container-fullwidth">
                <NavBarMainComponent courseId = {this.props.courseId} history = {this.props.history}/>
                <div className="row wbdv-main-row">
                    <div className="col-sm-3 bg-dark wbdv-side-bar">
                        <SideBarComponent {...this.props} {...this.props.courseId}/>
                    </div>
                    <div className="col-sm-9">
                        <MainContentComponent {...this.props} {...this.props.moduleId}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default CourseEditorComponent;