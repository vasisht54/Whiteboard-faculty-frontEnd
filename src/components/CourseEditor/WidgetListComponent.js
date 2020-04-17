import React from "react";
import connect from "react-redux/lib/connect/connect";
import WidgetItemComponent from "./widgets/WidgetItemComponent";
import widgetService from "../../services/WidgetService";
import {createWidget, deleteWidget, findWidgetsForTopic} from "../../actions/widgetActions";
import WidgetPreviewComponent from "./widgets/WidgetPreviewComponent";

class WidgetListComponent extends React.Component {

    state = {
        previewStatus: false
    };

    componentDidMount() {
        if (this.props.topicId !== undefined)
            this.props.topicId && this.props.findWidgetsForTopic(this.props.topicId)
    }

    newWidgetTemplate = {
        id: "",
        title: "",
        topicId: this.props.topicId,
        type: "HEADING",
        orderSequence: '',
        text: "Sample Heading text",
        src: null,
        size: 1,
        width: 0,
        height: 0,
        cssClass: 0,
        style: null,
        value: null
    };

    previewToggle = (e) => {
        this.setState({
            previewStatus: !this.state.previewStatus
        })
    };


    render() {
        return(
            <div className="container">
                {
                    this.props.topicId && <div className="container svms-misc-buttons pb-2">
                        <div className="row">
                            <div className="col-7"/>
                            <div className="col-5">
                                <label className="switch float-right pt-1">
                                    <input onChange={this.previewToggle} type="checkbox" />
                                    <span className="slider round"/>
                                </label>
                                &nbsp;
                                <h5 className="float-right d-inline-flex pt-1">Preview &nbsp;</h5>
                            </div>
                        </div>
                    </div>
                }
                {
                   !this.state.previewStatus &&
                   <ul className="container">
                        {
                            this.props.widgets && this.props.widgets.map(widget =>
                            <WidgetItemComponent key={widget.id} widget={widget}
                                                 deleteWidget={this.props.deleteWidget}
                                                 editWidget = {this.props.editWidget}
                                                 updateWidgetOrder = {this.props.updateWidgetOrder}
                            />
                            )
                        }
                        {
                            this.props.topicId &&
                            <div className="btn float-right">
                                <i onClick={() => {
                                    this.props.createWidget(this.props.topicId, this.newWidgetTemplate, this.props.widgets.length+1)
                                }}
                                className="fas fa-plus-square fa-2x"/>
                            </div>
                        }
                    </ul>
                }
                {
                    this.state.previewStatus &&
                        <WidgetPreviewComponent widgets={this.props.widgets}/>
                }
            </div>
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
    deleteWidget: widgetId => {
        widgetService.deleteWidget(widgetId)
            .then(response =>
                dispatch(deleteWidget(widgetId))
            )
    },
    createWidget: (topicId, widget, order) => {
        widget.orderSequence = order
        widgetService.createWidget(topicId, widget)
            .then(response =>
                dispatch(createWidget(response))
            )
    },
    editWidget: (widget) => {
        widgetService.updateWidget(widget.id, widget)
            .then(response =>
                widgetService.findWidgetsForTopic(widget.topic._id)
                    .then(actualWidgets => {
                            dispatch(findWidgetsForTopic(actualWidgets))
                        }
                    )
            )
    },
    updateWidgetOrder: (direction, widget) => {
        widgetService.updateWidgetOrder(widget.id, widget, direction)
            .then(response =>
                widgetService.findWidgetsForTopic(widget.topic._id)
                    .then(actualWidgets => {
                        dispatch(findWidgetsForTopic(actualWidgets))
                    })
            )
    }
});

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(WidgetListComponent)
