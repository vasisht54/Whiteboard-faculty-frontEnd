import React from "react";
import CourseCardComponent from "../components/CourseManager/CourseCardComponent";
import {findAllCourses, deleteCourse, updateCourse} from "../services/CourseService";

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

    editCourse = (course) =>
        this.setState(prevState => {
            updateCourse(course._id, {title: prevState.updatedCourseTitle, ownedBy: "me"})
                .then(() => {
                    findAllCourses()
                        .then(courses => {
                            this.setState({
                                              courses: courses
                                          })
                        })
                })
        });


    onTextEntry = (title) =>
        this.setState({
                          updatedCourseTitle: title
                      });


    deleteCourse = (course) =>
        this.setState(prevState => {
            deleteCourse(course._id)
                .then(() => {
                    findAllCourses()
                        .then(courses => {
                            this.setState({
                                              courses: courses
                                          })
                        })
                })
        });

    render(){
        return(
            <ul className="card-container">
                <h4 className="pt-2">Recent Documents</h4>
                <div className="row">
                    {
                        this.state.courses.map(course =>
                            <CourseCardComponent
                                deleteCourse = {this.deleteCourse}
                                course = {course}
                                showEditor={this.props.showEditor}
                                onTextEntry = {this.onTextEntry}
                                editCourse = {this.editCourse}
                            />
                        )
                    }
                </div>
            </ul>
        )
    }
}
export default CourseCardListComponent;