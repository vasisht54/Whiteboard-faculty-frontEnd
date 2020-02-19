import React from "react";
import CourseRowComponent from "./CourseRowComponent";

class CourseTableBodyComponent extends React.Component {

    state = {
        editing: false
    };

    render() {
        return(
            <tbody>
            {
                this.props.courses.map(course =>
                    <CourseRowComponent
                        deleteCourse={this.props.deleteCourse}
                        editCourse={this.props.editCourse}
                        onTextEntry = {this.props.onTextEntry}
                        showEditor = {this.props.showEditor}
                        course={course}
                    />
                )
            }
            </tbody>
        )
    }
}
export default CourseTableBodyComponent;