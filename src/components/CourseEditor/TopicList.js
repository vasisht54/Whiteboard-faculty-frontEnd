import React from "react";
import {TopicPill} from "./TopicPill";

export const TopicList = ({topics}) =>
    <ul className="nav nav-pills navbar-expand-md wbdv-topic-pill-list">
        {
            topics.map(topic =>
                <TopicPill topic = {topic} />
            )
        }
    </ul>;