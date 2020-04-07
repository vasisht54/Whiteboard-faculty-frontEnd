import React from "react";

export default class paragraphWidgetComponent extends React.Component {

    state = {
        widget: this.props.widget,
    };

    handleTextAreaChange = (text) => {
        this.setState({
                widget: {
                    ...this.state.widget,
                    text
                }
            }
        )
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

                    <div className="form-group pl-2">
                        <textarea className="form-control" rows="2" placeholder="Paragraph text"
                                  onChange={(e)=> this.handleTextAreaChange(e.target.value)}
                                  value={this.state.widget.text}/>
                    </div>
                    <div className="pl-2">
                        <input className="form-control"
                               onChange={(e) => this.handleTitleChange(e.target.value)}
                               value={this.state.widget.title} placeholder="Widget name"/>
                    </div>
                    <br/>
                    <div className="pl-2">
                        <h4>Preview</h4>
                    </div>

                    <div className="pl-2">
                        <h6>{this.state.widget.text}</h6>
                    </div>
                </div>
        )
    }
}
