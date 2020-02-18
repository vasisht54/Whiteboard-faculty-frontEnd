import React from "react";
import CourseTableHeadComponent from "../components/CourseManager/CourseTableHeadComponent";
import CourseRowComponent from "../components/CourseManager/CourseRowComponent";
import {deleteCourse, findAllCourses} from "../services/CourseService";

class CourseTableContainer extends React.Component {

    state = {
        courses: this.props.courses
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


    render() {
      return(
          <div className="table-responsive-sm">
              <table className="table table-sm">
                  <thead className="thead-light">
                  <CourseTableHeadComponent />
                  </thead>
                  <CourseRowComponent
                      showEditor = {this.props.showEditor}
                      deleteCourse = {this.deleteCourse}
                      courses = {this.state.courses}/>
              </table>
          </div>
      )
    }
}
export default CourseTableContainer;