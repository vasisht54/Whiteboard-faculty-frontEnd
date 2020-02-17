import React from "react";

export const LessonList = ({lessons}) =>
    <ul className="nav nav-pills">
        {
            lessons.map(lesson =>
                    <li className="nav-item wbdv-page-tab">
                        <a href="#" className="wbdv-bold nav-link">{lesson.title}</a>
                    </li>
            )
        }
    </ul>;