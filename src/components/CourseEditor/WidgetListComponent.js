import React from "react";
import connect from "react-redux/lib/connect/connect";
import WidgetItemComponent from "./WidgetItemComponent";

class WidgetListComponent extends React.Component {

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    render() {
        return(
            <div>
                <h1>Widget List</h1>
                <ul>
                    {
                    this.props.widgets.map(widget =>
                        <WidgetItemComponent key = {widget._id} widget = {widget}/>
                    )}
                </ul>
            </div>
        )
    }
}

const dispatchToPropertyMapper = dispatch => ({

    findWidgetsForTopic: (tid) =>
        fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: "FIND_ALL_WIDGETS",
                    widgets: widgets
                })
            ),
    findAllWidgets: () =>
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: "FIND_ALL_WIDGETS",
                    widgets: widgets
                })
            )
})

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListComponent)