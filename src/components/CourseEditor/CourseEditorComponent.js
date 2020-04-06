import React from "react";
import NavBarMainComponent from "./NavBarMainComponent";
import SideBarComponent from "./SideBarComponent";
import MainContentComponent from "./MainContentComponent";

class CourseEditorComponent extends React.Component {
    render() {
        return (
            <div className="container-fullwidth">
                <NavBarMainComponent history = {this.props.history}/>
                <div className="row">
                    <SideBarComponent {...this.props} {...this.props.courseId}/>
                    <div className="col-9">
                        <MainContentComponent {...this.props} {...this.props.moduleId}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default CourseEditorComponent;