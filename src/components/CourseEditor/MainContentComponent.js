import React from "react";
import TopicListComponent from "./TopicListComponent";
import WidgetUtilityButtons from "./WidgetUtilityButtons";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import LessonListComponent from "./LessonListComponent";
import WidgetListComponent from "./WidgetListComponent";

const MainContentComponent = (props) =>

    <div className="container svms-main-content">
        <LessonListComponent {...props}/>
        <br />
        <TopicListComponent {...props}/>

        <WidgetUtilityButtons />

        <div className="row m-3">
          <WidgetListComponent {...props}/>
          {/*<HeadingWidgetComponent />*/}
        </div>

        <div className="float-right">
            <button className="btn">
                <i className="fas fa-plus-circle fa-2x"/>
            </button>
        </div>
    </div>;
export default MainContentComponent;