import React from "react";

class widgetPreviewComponent extends React.Component {

    handleList = (text) => {
        const lines = text.split('\n');
        return lines.map(function (line) {
            return (
                <li key={line}> {line} </li>
            )
        });
    }

    inspectForWidgetTypeAndSize = (widget) => {

        switch (widget.type) {
            case "HEADING": {
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

            case "PARAGRAPH":
                return <h6>{widget.text}</h6>;

            case "LIST": {
                if (widget.value === "OL") {
                    return <ol>{this.handleList(widget.text)}</ol>
                } else {
                    return <ul>{this.handleList(widget.text)}</ul>
                }

            }
            case "IMAGE":
                return <img src={widget.src} className="rounded" alt={widget.title}/>;
        }
    }


    render() {
        return(
            <div className="container">
                <div className="card col">
                    <div className="row">
                        <div className="card-body">
                            {
                                this.props.widgets.map(widget =>
                                    <div className="pl-4 row">
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