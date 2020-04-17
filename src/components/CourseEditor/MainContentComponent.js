import React from "react";
import TopicListComponent from "./TopicListComponent";
import LessonListComponent from "./LessonListComponent";
import WidgetListComponent from "./WidgetListComponent";

const MainContentComponent = (props) =>

    <div className="container svms-main-content">
        <LessonListComponent {...props}/>
        <br />
        <TopicListComponent {...props}/>

        <div className="row">
          <WidgetListComponent {...props}/>
        </div>
    </div>;
export default MainContentComponent;
