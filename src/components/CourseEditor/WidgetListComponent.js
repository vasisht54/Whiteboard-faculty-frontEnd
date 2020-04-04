import React from "react";
import connect from "react-redux/lib/connect/connect";
import WidgetItemComponent from "./widgets/WidgetItemComponent";
import topicService from "../../services/TopicService";
import widgetService from "../../services/WidgetService";
import {createTopic, deleteTopic, findTopicsForLesson} from "../../actions/topicActions";
import {findWidgetsForTopic} from "../../actions/widgetActions";

class WidgetListComponent extends React.Component {

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    render() {
        return(
            <ul className="container">
                {
                this.props.widgets.map(widget =>
                    <WidgetItemComponent key = {widget._id} widget = {widget}/>
                )}
            </ul>
        )
    }
}

const dispatchToPropertyMapper = dispatch => ({

    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(actualWidgets =>
                dispatch(findWidgetsForTopic(actualWidgets))
            )
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
});

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListComponent)