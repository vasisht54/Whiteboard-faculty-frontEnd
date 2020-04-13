import React from "react";

const CourseListHeaderComponent = ({addCourse, onTextEntry}) =>
    <nav className="navbar navbar-expand-md navbar-dark row">
        <div className="container-fluid">
            <div className="col-2 col-sm-1 col-md-1">
                <button className="btn wbdv-field wbdv-hamburger">
                    <i style={{color: "white"}} className="fas fa-bars"/>
                </button>
            </div>
            <div className="col-0 col-sm-3 col-md-3 collapse navbar-collapse">
                <h3 style={{color: "white"}} className="wbdv-label wbdv-course-manager">Course Manager</h3>
            </div>
            <div className="col-8 col-sm-7 col-md-7">
                <input onChange={(e) => {onTextEntry(e.target.value)}}
                    className="form-control wbdv-field wbdv-new-course" placeholder="New Course Title"/>
            </div>
            <div className="col-2 col-sm-1 col-md-1 float-left">
                <i style={{color: "white"}} onClick={addCourse} className="btn wbdv-button wbdv-add-course fas fa-plus fa-2x"/>
            </div>
        </div>
    </nav>;

export default CourseListHeaderComponent;