import React from "react";
import NavListComponent from "./NavListComponent";
import courseService from "../../services/CourseService"

class NavBarMainComponent extends React.Component {

    state = {
        course: {}
    };

    componentDidMount() {
        courseService.findCourseById(this.props.courseId)
            .then(actualCourse =>
                this.setState({
                    course: actualCourse
                })
            )
    }

    render() {
        return (
            <div className="wbdv-navbar">
                <nav className="navbar navbar-dark navbar-expand-md" >
                    <button onClick={() => this.props.history.push("/")} className="btn wbdv-course-editor wbdv-close wbdv-bold">
                        X
                    </button>
                    &nbsp;<a className="navbar-brand wbdv-bold wbdv-course-title" href="#">{this.state.course.title}</a>
                    <div className="navbar-collapse flex-row-reverse">
                        <NavListComponent navTabs = {[
                            {title: "Build", _id: "1" },
                            {title: "Pages", _id: "2"},
                            {title: "Theme", _id: "3"},
                            {title: "Store", _id: "4"},
                            {title: "Apps", _id: "5"},
                            {title: "Settings", _id: "6"},
                            {title: "+", _id: "7"}
                        ]} />
                    </div>
                </nav>
            </div>
        )
    }
}
export default NavBarMainComponent;