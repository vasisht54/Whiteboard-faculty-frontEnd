import React from "react";

export default class HeadingWidgetComponent extends React.Component {

    state = {
        widget: this.props.widget,
        previewText: this.props.widget.text
    };

    componentDidMount() {
        this.state.previewText = <h1>{this.state.widget.text}</h1>
    }

    handleHeadingSize = (size) => {
        switch (size) {
            case "1": this.setState({
                previewText: <h1>{this.state.widget.text}</h1>
            });
            break;
            case "2": this.setState({
                previewText: <h2>{this.state.widget.text}</h2>
            });
                break;
            case "3": this.setState({
                previewText: <h3>{this.state.widget.text}</h3>
            });
                break;
            case "4": this.setState({
                previewText: <h4>{this.state.widget.text}</h4>
            });
                break;
            case "5": this.setState({
                previewText: <h5>{this.state.widget.text}</h5>
            });
                break;
            case "6": this.setState({
                previewText: <h6>{this.state.widget.text}</h6>
            });
        }
    };

    handleTextChange = (text) => {
        this.setState({
            widget: {
                ...this.state.widget,
                text
            }
        })
    };

    handleTitleChange = (title) => {
        this.setState({
            widget: {
                ...this.state.widget,
                title
            }
        })
    };

    render() {
        return(
            <div className="card-body">
                <div className="pl-2">
                    <input className="form-control"
                           onChange={(e) => this.handleTextChange(e.target.value)}
                           value={this.state.widget.text} placeholder="Heading text"/>
                </div>
                <div className="pl-2 pt-3 pb-3">
                    <select className="form-control"
                            onChange={(e) => this.handleHeadingSize(e.target.value)}>
                        <option value="1">Heading 1</option>
                        <option value="2">Heading 2</option>
                        <option value="3">Heading 3</option>
                        <option value="4">Heading 4</option>
                        <option value="5">Heading 5</option>
                        <option value="6">Heading 6</option>
                    </select>
                </div>
                <div className="pl-2">
                    <input className="form-control"
                           onChange={(e)=> this.handleTitleChange(e.target.value)}
                           value={this.state.widget.title} placeholder="Widget name"/>
                </div>
                <br/>
                <div className="pl-2">
                    <h4>Preview</h4>
                </div>
                {
                    <div className="pl-2">
                        {this.state.previewText}
                    </div>
                }
            </div>
        )
    }
}
