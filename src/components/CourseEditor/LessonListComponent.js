import React from "react";
import TopicPillComponent from "./TopicPillComponent";

const LessonListComponent = ({lessons}) =>
    <ul className="nav nav-pills navbar-expand-md wbdv-topic-pill-list">
        {
            lessons.map(lesson =>
                <TopicPillComponent lesson = {lesson} />
            )
        }
    </ul>;
export default LessonListComponent;