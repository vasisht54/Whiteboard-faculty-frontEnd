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
                        key = {course._id}
                        deleteCourse={this.props.deleteCourse}
                        editCourse={this.props.editCourse}
                        onTextEntry = {this.props.onTextEntry}
                        course={course}
                    />
                )
            }
            </tbody>
        )
    }
}
export default CourseTableBodyComponent;