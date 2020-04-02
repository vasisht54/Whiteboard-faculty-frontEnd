import React from "react";
import connect from "react-redux/lib/connect/connect";

const WidgetListComponent = ({widgets}) =>
    <div>
        <h1>Widget List</h1>
        {
            widgets.map(widget =>
                <li key={widget._id}>
                    {widget.title}
                </li>
            )
        }
    </div>;

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
});

export default connect(stateToPropertyMapper)(WidgetListComponent)