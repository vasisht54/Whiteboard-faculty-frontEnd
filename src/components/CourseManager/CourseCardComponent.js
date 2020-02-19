import React from "react";

const CourseCardComponent = ({course}) =>
    <div className="card pl-3 m-3 col-lg-2 col-xl-2 col-m-3 col-sm-2">
        <div className="card-body">
            <div className="card-title h6 font-weight-bold">
                {course.title}
            </div>
            <div className="card-text">
                Sample text
            </div>
        </div>
        <div className="card-footer">
            <small className="card-footer-text">
                {course._updatedAt}
            </small>
            <div>
                <button className="btn wbdv-row wbdv-button wbdv-edit">
                    <i className="fas fa-pencil-alt"/>
                </button>
                <button className="btn wbdv-row wbdv-button wbdv-delete float-right">
                    <i className="far fa-trash-alt"/>
                </button>
            </div>
        </div>
    </div>;

export default CourseCardComponent;