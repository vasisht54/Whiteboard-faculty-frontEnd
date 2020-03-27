import React from "react";
import TopicListComponent from "./TopicListComponent";
import WidgetListComponent from "./WidgetListComponent";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import LessonListComponent from "./LessonListComponent";

const MainContentComponent = (props) =>

    <div className="container svms-main-content">
        <LessonListComponent {...props}/>
        <br />
        <TopicListComponent />

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