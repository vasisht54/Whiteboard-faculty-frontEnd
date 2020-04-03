import React from "react";
import connect from "react-redux/lib/connect/connect";
import WidgetItemComponent from "./widgets/WidgetItemComponent";

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

    findWidgetsForTopic: (tid) =>
        fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets: widgets
                })
            )
})

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListComponent)