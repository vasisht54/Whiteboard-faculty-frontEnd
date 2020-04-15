import React from "react";

export default class ImageWidgetComponent extends React.Component {

    state = {
        widget: this.props.widget
    };

    handleTitleChange = (title) => {
        this.setState({
            widget: {
                ...this.state.widget,
                title
            }
        })
    };

    handleURLChange = (src) => {
        this.setState({
            widget: {
                ...this.state.widget,
                src
            }
        })
    }

    getWidgetValue = (dtype) => {
        if(dtype === "src") {
            if (this.state.widget.src === null) {
                return "";
            } else
                return this.state.widget.src;
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
                <div className="pl-2">
                    <input className="form-control"
                           onChange={(e) => {
                               this.handleURLChange(e.target.value);
                               this.props.updateSrc(e.target.value);
                           }}
                           value={this.getWidgetValue("src")} placeholder="Image URL"/>
                </div>
                <div className="pl-2 pt-3">
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
                    this.state.widget.src !== null &&
                    <img src={this.state.widget.src} className="pl-2 rounded" alt={this.state.widget.title}/>
                }
            </div>
        )
    }
}