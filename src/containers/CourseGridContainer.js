import React from "react";
import CourseCardListComponent from "./CourseCardListComponent";

const CourseGridContainer = ({showEditor, courses}) =>
    <CourseCardListComponent
        showEditor = {showEditor}
        courses={courses}/>;

export default CourseGridContainer;