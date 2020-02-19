import React from "react";
import CourseCardComponent from "./CourseCardComponent";

const CourseCardList = ({courses, showEditor}) =>
    <ul className="card-container">
        <h4 className="pt-2">Recent Documents</h4>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCardComponent course = {course} showEditor={showEditor}/>
                )
            }
        </div>
    </ul>;

export default CourseCardList;