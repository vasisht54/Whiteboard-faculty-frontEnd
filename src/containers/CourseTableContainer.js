import React from "react";
import CourseTableHeadComponent from "../components/CourseManager/CourseTableHeadComponent";
import CourseTableBodyComponent from "../components/CourseManager/CourseTableBodyComponent";
import courseService from "../services/CourseService";

class CourseTableContainer extends React.Component {

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
          <div className="container-fluid">
              <div className="table-responsive-sm">
                  <table className="table table-sm">
                      <thead className="thead-light">
                      <CourseTableHeadComponent />
                      </thead>
                      <CourseTableBodyComponent
                          updatedCourseTitle = {this.state.updatedCourseTitle}
                          onTextEntry = {this.onTextEntry}
                          editCourse = {this.editCourse}
                          deleteCourse = {this.deleteCourse}
                          courses = {this.state.courses}/>
                  </table>
              </div>
          </div>
      )
    }
}
export default CourseTableContainer;