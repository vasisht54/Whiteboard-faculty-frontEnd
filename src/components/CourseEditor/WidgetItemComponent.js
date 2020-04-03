import React from "react";

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
            <li>
                <div>{this.state.widget.title}</div>
            </li>
        )
    }
}

export default widgetItemComponent;