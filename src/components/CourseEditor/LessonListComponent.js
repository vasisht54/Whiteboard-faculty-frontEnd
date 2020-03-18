import React from "react";
import LessonTabComponent from "./LessonTabComponent";

const LessonListComponent = ({lessons}) =>
    <ul className="nav nav-tabs navbar-expand-md wbdv-topic-pill-list">
        {
            lessons.map(lesson =>
                <LessonTabComponent lesson = {lesson} />
            )
        }
    </ul>;
export default LessonListComponent;