import React from "react";

export default class ListWidgetComponent extends React.Component {

    state = {
        widget: this.props.widget
    };

    handleList = (text) => {
        const lines = text.split('\n');
        return lines.map(function (line) {
            return (
                <li key={line}> {line} </li>
            )
        });
    }

    handleTextChange = (text) => {
        this.setState({
            widget: {
                ...this.state.widget,
                text
            }
        })
    };

    handleListType = (type) => {
        this.setState({
            widget: {
                ...this.state.widget,
                value: type
            }
        })
    }


    handleTitleChange = (title) => {
        this.setState({
            widget: {
                ...this.state.widget,
                title
            }
        })
    };

    getWidgetValue = (dtype) => {
        if(dtype === "text") {
            if (this.state.widget.text === null) {
                return "";
            } else
                return this.state.widget.text;
        }
        else if(dtype === "value") {
            if(this.state.widget.value === null) {
                return "";
            }
            else
                return this.state.widget.value;
        }
    }

    render() {
        return (
            <div className="card-body">
                <div className="pl-2 form-group">
                    <textarea className="form-control" rows="3"
                              onChange={(e) => {
                               this.handleTextChange(e.target.value);
                               this.props.updateText(e.target.value);
                           }}
                              value={this.getWidgetValue("text")} placeholder="Enter one list item per line"/>
                </div>
                <div className="pl-2 pb-3">
                    <select value={this.getWidgetValue("value")} className="form-control"
                            onChange={(e) => {
                                this.handleListType(e.target.value);
                                this.props.updateListType(e.target.value);
                            }}>
                        <option value="UL">Unordered list</option>
                        <option value="OL">Ordered list</option>
                    </select>
                </div>
                <div className="pl-2">
                    <input className="form-control"
                           onChange={(e)=> {
                               this.handleTitleChange(e.target.value);
                               this.props.updateTitle(e.target.value);
                           }}
                           value={this.state.widget.title} placeholder="Widget name"/>
                </div>
                <br/>
                <div className="pl-2">
                    <h4>Preview</h4>
                </div>
                {
                    this.state.widget.value === "UL" &&
                    <ul>
                        {/*{this.handleList(this.state.widget.text.replace(/\r?\n/g, '\n'))}*/}
                        {/*{this.handleList(this.state.widget.text.replace(/\n/g, '\n'))}*/}
                        {this.handleList(this.state.widget.text)}
                    </ul>
                }
                {
                    this.state.widget.value === "OL" &&
                    <ol>
                        {/*{this.handleList(this.state.widget.text.replace(/\r?\n/g, '\n'))}*/}
                        {/*{this.handleList(this.state.widget.text.replace(/\n/g, '\n'))}*/}
                        {this.handleList(this.state.widget.text)}
                    </ol>
                }
            </div>
        )
    }
}