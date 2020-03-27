import React from "react";
import LessonTabComponent from "./LessonTabComponent";
import connect from "react-redux/lib/connect/connect";

const LessonListComponent = ({lessons}) =>
    <ul className="nav nav-tabs navbar-expand-md wbdv-topic-pill-list">
        {
            lessons.map(lesson =>
                <LessonTabComponent key = {lesson._id} lesson = {lesson} />
            )
        }
    </ul>;

const stateToPropertyMapper = (state) => {
    return {lessons: state.lessons.lessons}
};

export default connect(stateToPropertyMapper)(LessonListComponent);