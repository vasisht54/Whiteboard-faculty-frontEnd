import React from "react";
import TopicPillComponent from "./TopicPillComponent";
import topicService from "../../services/TopicService";
import {createTopic, deleteTopic, findTopicsForLesson} from "../../actions/topicActions";
import connect from "react-redux/lib/connect/connect";
import LessonTabComponent from "./LessonTabComponent";

class TopicListComponent extends React.Component {

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId);
    }

    render() {
        return (
            <ul className="nav nav-pills navbar-expand-md wbdv-topic-pill-list">
                {
                    this.props.topics && this.props.topics.map(topic =>
                        <TopicPillComponent {...this.props} courseId={this.props.courseId} moduleId = {this.props.moduleId}
                                            key = {topic._id} topic = {topic}
                                            lessonId = {this.props.lessonId}
                                            editTopic = {this.props.editTopic} deleteLesson = {this.props.deleteTopic} />
                    )
                }
                <li className="nav-item wbdv-topic-pill" key={this.props.topicId}>
                    <div className="nav-pill">
                        <i onClick={() =>
                            this.props.createTopic(this.props.lessonId,
                                {title: 'New Topic'})} style={{color: "black"}} className="fas fa-plus"/>
                    </div>
                </li>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {topics: state.topics.topics}
};

const dispatchToPropertyMapper = dispatch => {
    return {
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(actualTopics =>
                    dispatch(findTopicsForLesson(actualTopics)))
        },
        deleteTopic: topicId => {
            topicService.deleteTopic(topicId)
                .then(response =>
                    dispatch(deleteTopic(topicId))
                )
        },
        createTopic: (lessonId, topic) => {
            topicService.createTopic(lessonId, topic)
                .then(response =>
                    dispatch(createTopic(response))
                )
        },
        editTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(response =>
                    topicService.findTopicsForLesson(topic._lessons)
                        .then(actualTopics => {
                                dispatch(findTopicsForLesson(actualTopics))
                            }
                        )
                )
        }
    };
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicListComponent);
