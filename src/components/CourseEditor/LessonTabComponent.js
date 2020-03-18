import React from "react";

const LessonTabComponent = ({lesson}) =>
    <li className="nav-item wbdv-topic-pill">
        <a className="nav-link" href="#">{lesson.title}</a>
    </li>;
export default LessonTabComponent;