import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";

export default class widgetItemComponent extends React.Component {

    state = {
        editing: false,
        widget: this.props.widget,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.widget.id !== this.props.widget.id) {
            this.setState({
                widget : this.props.widget
            })
        }
    }

    handleWidgetName = () => {
        switch (this.state.widget.type) {
            case "HEADING": return <div>Heading Widget</div>
            case "PARAGRAPH": return <div>Paragraph Widget</div>
            case "LIST": return <div>List Widget</div>
            case "IMAGE": return <div>Image widget</div>
        }
    };

    updateText = (text) => {
        this.setState({
            widget: {
                ...this.state.widget,
                text
            }
        })
    };

    updateSrc = (src) => {
        this.setState({
            widget: {
                ...this.state.widget,
                src
            }
        })
    };


    updateWidgetType = (type) => {
        this.setState({
            widget: {
                ...this.state.widget,
                type
            }
        })
    };

    currentWidgetType = () => {
        switch(this.state.widget.type) {
            case "HEADING": return "HEADING";
            case "PARAGRAPH": return "PARAGRAPH";
            case "LIST": return "LIST"
            case "IMAGE": return "IMAGE"
        }
    };

    updateTitle = (title) => {
        this.setState({
            widget: {
                ...this.state.widget,
                title
            }
        })
    };

    updateSize = (size) => {
        const num = parseInt(size)
        this.setState( {
            widget: {
                ...this.state.widget,
                size: num
            }
        })
    }

    updateListType = (type) => {
        this.setState( {
            widget: {
                ...this.state.widget,
                value: type
            }
        })
    }


    render() {
        return (
            <div  key={this.state.widget.id}>
                <div className="card col">
                    <div className="row">
                        <div className="col-sm-3"><h3>{this.handleWidgetName()}</h3></div>

                            <div className="col-sm-9">
                                <div className="d-inline-flex float-right pt-1 pl-2">
                                    <button onClick={() => {
                                        this.props.deleteWidget(this.state.widget.id)}}
                                            className="btn btn-danger btn-sm">X</button>
                                </div>
                                <button onClick={() => this.props.editWidget(this.state.widget)}
                                        className="btn btn-success float-right">Save</button>
                                <div className="d-inline-flex float-right pr-2 my-auto">
                                    <div className="form-group">
                                        <select value={this.currentWidgetType()}
                                                onChange={(e) => this.updateWidgetType(e.target.value)} className="form-control">
                                            <option value="HEADING" >Heading</option>
                                            <option value="PARAGRAPH">Paragraph</option>
                                            <option value="LIST">List</option>
                                            <option value="IMAGE">Image</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-inline-flex float-right pr-2 pt-1">
                                    <button onClick={() => this.props.updateWidgetOrder("DOWN", this.state.widget)}
                                            className="btn btn-warning btn-sm">
                                        <i className="fas fa-arrow-down"/>
                                    </button>
                                </div>
                                <div className="d-inline-flex float-right pr-2 pt-1">
                                    <button onClick={() => this.props.updateWidgetOrder("UP", this.state.widget)}
                                            className="btn btn-warning btn-sm">
                                        <i className="fas fa-arrow-up"/>
                                    </button>
                                </div>
                            </div>

                        {
                            this.state.widget.type === "HEADING" &&
                            <HeadingWidgetComponent
                                updateSize = {this.updateSize}
                                updateTitle = {this.updateTitle}
                                updateText = {this.updateText}
                                widget={this.props.widget}/>
                        }
                        {
                            this.state.widget.type === "PARAGRAPH" &&
                            <ParagraphWidgetComponent
                                updateTitle = {this.updateTitle}
                                updateText = {this.updateText}
                                widget = {this.props.widget}/>
                        }
                        {
                            this.state.widget.type === "LIST" &&
                            <ListWidgetComponent
                                updateTitle = {this.updateTitle}
                                updateText = {this.updateText}
                                updateListType = {this.updateListType}
                                widget = {this.props.widget}/>
                        }
                        {
                            this.state.widget.type === "IMAGE" &&
                                <ImageWidgetComponent
                                    updateTitle = {this.updateTitle}
                                    updateSrc = {this.updateSrc}
                                    widget = {this.props.widget} />
                        }
                     </div>
                 </div>
                <br />
            </div>
        )
    }
};