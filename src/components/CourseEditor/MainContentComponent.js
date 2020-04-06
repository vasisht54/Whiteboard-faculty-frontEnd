import React from "react";
import TopicListComponent from "./TopicListComponent";
import WidgetUtilityButtonsComponent from "./WidgetUtilityButtonsComponent";
import LessonListComponent from "./LessonListComponent";
import WidgetListComponent from "./WidgetListComponent";

const MainContentComponent = (props) =>

    <div className="container svms-main-content">
        <LessonListComponent {...props}/>
        <br />
        <TopicListComponent {...props}/>

        {/*<WidgetUtilityButtonsComponent/>*/}

        <div className="row">
          <WidgetListComponent {...props}/>
        </div>
    </div>;
export default MainContentComponent;