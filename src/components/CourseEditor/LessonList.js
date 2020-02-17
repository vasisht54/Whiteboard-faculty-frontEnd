import React from "react";
import {LessonTab} from "./LessonTab";

export const LessonList = ({lessons}) =>
    <ul className="nav nav-pills">
        {
            lessons.map(lesson =>
                    <LessonTab lesson={lesson} />
            )
        }
    </ul>;