import React from "react";

const TopicPillComponent = ({topic}) =>
    <li className="nav-item wbdv-topic-pill">
        <a className="nav-link shadow" href="#">{topic.title}</a>
    </li>;
export default TopicPillComponent;