import React from "react";

export const TopicPill = ({topic}) =>
    <li className="nav-item wbdv-topic-pill">
        <a className="nav-link shadow" href="#">{topic.title}</a>
    </li>;