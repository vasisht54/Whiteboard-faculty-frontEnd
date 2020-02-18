import React from "react";
import CourseTableHeadComponent from "./CourseTableHeadComponent";
import CourseRowComponent from "./CourseRowComponent";

class CourseTableComponent extends React.Component {
    state = {
        courses: this.props.courses
    };

    deleteCourse = (course) =>
        this.setState(prevState => {
            return({
                courses: prevState.courses.filter(function(crs){
                    return crs._id !== course._id;
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
                      deleteCourse = {this.deleteCourse}
                      courses = {this.state.courses}/>
              </table>
          </div>
      )
    }
}
export default CourseTableComponent;