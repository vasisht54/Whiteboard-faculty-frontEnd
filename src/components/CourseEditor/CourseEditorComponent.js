import React from "react";
import NavBarMainComponent from "./NavBarMainComponent";
import SideBarComponent from "./SideBarComponent";
import MainContentComponent from "./MainContentComponent";
import {createStore} from "redux";
import {Provider} from "react-redux";

class CourseEditorComponent extends React.Component {
    render() {
        return (
            <div className="container-fullwidth">
                <NavBarMainComponent {...this.props}/>
                <div className="row">
                    <SideBarComponent {...this.props}/>
                    <div className="col-9">
                        <MainContentComponent {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default CourseEditorComponent;