import React from "react";
import CourseCardList from "../components/CourseManager/CourseCardList";
import {findAllCourses, updateCourse, deleteCourse} from "../services/CourseService";


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


    render() {
        return(
            <CourseCardList
                updatedCourseTitle = {this.state.updatedCourseTitle}
                onTextEntry = {this.onTextEntry}
                editCourse = {this.editCourse}
                showEditor = {this.props.showEditor}
                deleteCourse = {this.deleteCourse}
                courses={this.props.courses}/>
        )
    }
}

export default CourseGridContainer;