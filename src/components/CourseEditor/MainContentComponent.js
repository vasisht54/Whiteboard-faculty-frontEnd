import React from "react";
import TopicListComponent from "./TopicListComponent";
import WidgetListComponent from "./WidgetListComponent";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import LessonListComponent from "./LessonListComponent";

const MainContentComponent = () =>

    <div className="container svms-main-content">
        <LessonListComponent lessons={[
            {title: "Lesson 1"},
            {title: "Lesson 2"},
            {title: "Lesson 3"},
            {title: "Lesson 4"},
            {title: "+"},
        ]}/>
        <TopicListComponent topics = {[
            {title: "Topic 1"},
            {title: "Topic 2"},
            {title: "Topic 3"},
            {title: "Topic 4"},
            {title: "+"},
        ]}/>

        <WidgetListComponent />

        <div className="row m-3">
          <HeadingWidgetComponent/>
        </div>

        <div className="float-right">
            <button className="btn">
                <i className="fas fa-plus-circle fa-2x"/>
            </button>
        </div>
    </div>;
export default MainContentComponent;