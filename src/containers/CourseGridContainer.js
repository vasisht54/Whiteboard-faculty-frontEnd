import React from "react";
import CourseCardListComponent from "./CourseCardListComponent";
import courseService from "../services/CourseService";

class CourseGridContainer extends React.Component {

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

    deleteCourse = (course) =>
        this.setState(prevState => {
            courseService.deleteCourse(course._id)
                .then(() => {
                    courseService.findAllCourses()
                        .then(courses => {
                            this.setState({
                                courses: courses
                            })
                        })
                })
        });


    editCourse = (course) =>
        this.setState(prevState => {
            courseService.updateCourse(course._id, {title: prevState.updatedCourseTitle, ownedBy: "me"})
                .then(() => {
                    courseService.findAllCourses()
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

    render() {
        return(
            <CourseCardListComponent
                updatedCourseTitle = {this.state.updatedCourseTitle}
                onTextEntry = {this.onTextEntry}
                editCourse = {this.editCourse}
                deleteCourse = {this.deleteCourse}
                courses = {this.state.courses}
            />
        )
    }
}

export default CourseGridContainer;