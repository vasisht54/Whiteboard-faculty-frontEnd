import React from "react";
import CourseCardList from "../components/CourseManager/CourseCardList";

const CourseGridContainer = () =>
    <CourseCardList
        updatedCourseTitle = {this.state.updatedCourseTitle}
        showEditor = {this.props.showEditor}
        courses={this.props.courses}/>;

export default CourseGridContainer;