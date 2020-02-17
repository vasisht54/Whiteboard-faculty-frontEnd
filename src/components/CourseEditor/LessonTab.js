import React from "react";

export const LessonTab = ({lesson}) =>
    <li className="nav-item wbdv-page-tab">
        <a href="#" className="wbdv-bold nav-link">{lesson.title}</a>
    </li>;