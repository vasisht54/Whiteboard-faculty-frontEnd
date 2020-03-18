import React from "react";

const LessonTabComponent = ({lesson}) =>
    <li className="nav-item wbdv-page-tab">
        <a href="#" className="wbdv-bold nav-link">{lesson.title}</a>
    </li>;
export default LessonTabComponent;