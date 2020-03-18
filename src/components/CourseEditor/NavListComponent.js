import React from "react";
import LessonTabComponent from "./LessonTabComponent";

const LessonListComponent = ({lessons}) =>
    <ul className="nav nav-pills">
        {
            lessons.map(lesson =>
                    <LessonTabComponent lesson={lesson} />
            )
        }
    </ul>;
export default LessonListComponent;