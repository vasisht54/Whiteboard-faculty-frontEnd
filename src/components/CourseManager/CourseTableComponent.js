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
          <div>
              <nav className="navbar navbar-expand-md navbar-dark bg-primary row">
                  <div className="container-fluid">
                      <div className="col-2 col-sm-1 col-md-1">
                          <button className="btn wbdv-field wbdv-hamburger">
                              <i className="fas fa-bars"/>
                          </button>
                      </div>
                      <div className="col-0 col-sm-3 col-md-3 collapse navbar-collapse">
                          <h3 className="wbdv-label wbdv-course-manager">
                              Course Manager
                          </h3>
                      </div>
                      <div className="col-8 col-sm-7 col-md-7">
                          <input className="form-control wbdv-field wbdv-new-course" placeholder="New Course Title"/>
                      </div>
                      <div className="col-2 col-sm-1 col-md-1 float-left">
                          <button className="btn wbdv-button wbdv-add-course">
                              <i className="fas fa-plus-circle fa-2x"/>
                          </button>
                      </div>
                  </div>
              </nav>
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
          </div>
      )
    }
}
export default CourseTableComponent;