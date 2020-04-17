import React from "react";

export default class HeadingWidgetComponent extends React.Component {

    state = {
        widget: this.props.widget
    };

    handleHeadingSize = (size) => {
        const num = parseInt(size)
        this.setState({
            widget: {
                ...this.state.widget,
                size: num
            }
        })
    }

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
                           onChange={(e) => {
                               this.handleTextChange(e.target.value);
                               /*this.handleTextChange(this.value)*/
                               this.props.updateText(e.target.value);

                           }}
                           value={this.state.widget.text} placeholder="Heading text"/>
                </div>
                <div className="pl-2 pt-3 pb-3">
                    <select value={this.state.widget.size} className="form-control"
                            onChange={(e) => {
                                this.handleHeadingSize(e.target.value);
                                this.props.updateSize(e.target.value);
                            }}>
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
                    {this.state.widget.size === 1 && <h1 className="pl-2">{this.state.widget.text}</h1>}
                    {this.state.widget.size === 2 && <h2 className="pl-2">{this.state.widget.text}</h2>}
                    {this.state.widget.size === 3 && <h3 className="pl-2">{this.state.widget.text}</h3>}
                    {this.state.widget.size === 4 && <h4 className="pl-2">{this.state.widget.text}</h4>}
                    {this.state.widget.size === 5 && <h5 className="pl-2">{this.state.widget.text}</h5>}
                    {this.state.widget.size === 6 && <h6 className="pl-2">{this.state.widget.text}</h6>}
            </div>
        )
    }
}
