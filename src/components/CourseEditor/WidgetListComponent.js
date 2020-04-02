import React from "react";
import connect from "react-redux/lib/connect/connect";

class WidgetListComponent extends React.Component {

    componentDidMount() {
        this.props.findAllWidgets();
    }

    render() {
        return(
            <div>
                <h1>Widget List</h1>
                {
                    this.props.widgets.map(widget =>
                        <li key={widget.id}>
                            {widget.title}
                        </li>
                    )
                }
            </div>
    )
    }
}

const dispatchToPropertyMapper = dispatch => ({
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

export default connect(stateToPropertyMapper)(WidgetListComponent)