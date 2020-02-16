import React from "react";

export const TopicList = ({topics}) =>
    <ul className="nav nav-pills navbar-expand-md wbdv-topic-pill-list">
        {
            topics.map(topic =>
               <li className="nav-item wbdv-topic-pill">
                   <a className="nav-link shadow" href="#">{topic.title}</a>
               </li>
            )
        }
    </ul>;