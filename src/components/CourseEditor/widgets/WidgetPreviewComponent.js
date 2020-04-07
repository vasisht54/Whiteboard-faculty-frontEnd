import React from "react";

class widgetPreviewComponent extends React.Component {

    inspectForWidgetTypeAndSize = (widget) => {
        if(widget.type === "HEADING") {
            switch (widget.size) {
                case 1:
                    return <h1>{widget.text}</h1>;
                case 2:
                    return <h2>{widget.text}</h2>;
                case 3:
                    return <h3>{widget.text}</h3>;
                case 4:
                    return <h4>{widget.text}</h4>;
                case 5:
                    return <h5>{widget.text}</h5>;
                case 6:
                    return <h6>{widget.text}</h6>;
                default:
                    return <h1>{widget.text}</h1>;
            }
        }
        else if(widget.type === "PARAGRAPH") {
            return <h6>{widget.text}</h6>
        }
    };

    render() {
        return(
            <div className="container">
                <div className="card col">
                    <div className="row">
                        <div className="card-body">
                            {
                                this.props.widgets.map(widget =>
                                    <div className="pl-2">
                                        {this.inspectForWidgetTypeAndSize(widget)}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default widgetPreviewComponent;