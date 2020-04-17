import React from "react";
import TopicPillComponent from "./TopicPillComponent";
import topicService from "../../services/TopicService";
import {createTopic, deleteTopic, findTopicsForLesson} from "../../actions/topicActions";
import connect from "react-redux/lib/connect/connect";
import widgetService from "../../services/WidgetService";
import {findWidgetsForTopic} from "../../actions/widgetActions";

class TopicListComponent extends React.Component {

    componentDidMount() {
        /*this.props.findTopicsForLesson(this.props.lessonId);*/
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    render() {
        return (
            <ul className="nav nav-pills navbar-expand-md wbdv-topic-pill-list">
                {
                    this.props.topics && this.props.topics.map(topic =>
                        <TopicPillComponent {...this.props}
                                            courseId={this.props.courseId}
                                            moduleId = {this.props.moduleId}
                                            key = {topic._id}
                                            topic = {topic}
                                            lessonId = {this.props.lessonId}
                                            editTopic = {this.props.editTopic}
                                            activeTopicId = {this.props.match.params.topicId}
                                            deleteLesson = {this.props.deleteTopic} />
                    )
                }
                {
                    this.props.lessonId &&
                    <li key={this.props.topicId}>
                        <div className="pt-3">
                            <i onClick={() =>
                                this.props.createTopic(this.props.lessonId,
                                    {title: 'New Topic'})} style={{color: "black"}} className="fas btn fa-plus"/>
                        </div>
                    </li>
                }
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
                    topicService.findTopicsForLesson(topic.lessonId)
                        .then(actualTopics => {
                                dispatch(findTopicsForLesson(actualTopics))
                            }
                        )
                )
        },
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(actualWidgets =>
                    dispatch(findWidgetsForTopic(actualWidgets)))
        }
    };
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicListComponent);
