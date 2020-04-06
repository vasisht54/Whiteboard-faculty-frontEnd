import React from "react";
import CourseCardComponent from "../components/CourseManager/CourseCardComponent";

class CourseCardListComponent extends React.Component {
    state = {
        courses: this.props.courses,
        updatedCourseTitle: ''
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.courses !== this.props.courses) {
            this.setState({
                              courses: this.props.courses
                          })
        }
    }

    render(){
        return(
            <ul className="card-container">
                <h4 className="pt-2">Recent Documents</h4>
                <div className="row">
                    {
                        this.state.courses.map(course =>
                            <CourseCardComponent
                                deleteCourse = {this.props.deleteCourse}
                                course = {course}
                                onTextEntry = {this.props.onTextEntry}
                                editCourse = {this.props.editCourse}
                            />
                        )
                    }
                </div>
            </ul>
        )
    }
}
export default CourseCardListComponent;