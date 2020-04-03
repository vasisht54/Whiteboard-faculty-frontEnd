import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

class widgetItemComponent extends React.Component {

    state = {
        editing: false,
        widget: this.props.widget
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.widget._id !== this.props.widget._id) {
            this.setState({
                widget : this.props.widget
            })
        }
    }

    render() {
        return (
            <div  key={this.state.widget.id}>
                {
                    this.state.widget.type === "HEADING" &&
                        <HeadingWidgetComponent />
                }
                <br />
                {
                    this.state.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent />
                }
                {/*<div>{this.state.widget.title}</div>*/}
            </div>
        )
    }
}

export default widgetItemComponent;