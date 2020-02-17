import React from "react";
import TopicListComponent from "./TopicListComponent";
import WidgetListComponent from "./WidgetListComponent";

const MainContentComponent = () =>

    <div className="container svms-main-content">
        <TopicListComponent topics = {[
            {title: "Topic 1"},
            {title: "Topic 2"},
            {title: "Topic 3"},
            {title: "Topic 4"},
            {title: "+"},
        ]}/>

        <WidgetListComponent />

        <div className="row m-3">
          
        </div>
        <div className="float-right">
            <button className="btn">
                <i className="fas fa-plus-circle fa-2x"/>
            </button>
        </div>
    </div>;
export default MainContentComponent;