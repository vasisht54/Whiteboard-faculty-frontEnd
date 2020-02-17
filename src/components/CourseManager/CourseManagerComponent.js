import React from "react";
import CourseListHeaderComponent from "./CourseListHeaderComponent";
import CourseTableComponent from "./CourseTableComponent";

const CourseManagerComponent = () =>
    <div>
        <CourseListHeaderComponent />
        <div className="container-sm">
            <CourseTableComponent/>

        </div>
    </div>;

export default CourseManagerComponent;