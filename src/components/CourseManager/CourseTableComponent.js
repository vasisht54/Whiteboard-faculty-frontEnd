import React from "react";
import CourseTableHeadComponent from "./CourseTableHeadComponent";
import CourseRowComponent from "./CourseRowComponent";
import {deleteCourse, findAllCourses} from "../../services/CourseService";

class CourseTableComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.courses !== this.props.courses) {
            this.setState({
                courses: this.props.courses
                          })
        }
    }

    state = {
        courses: this.props.courses
    };

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
export default CourseTableComponent;