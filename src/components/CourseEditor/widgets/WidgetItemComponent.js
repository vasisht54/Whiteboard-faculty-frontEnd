import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

export default class widgetItemComponent extends React.Component {

    state = {
        editing: false,
        widget: this.props.widget,
        dropDownIsOpen: false
    };

    toggleOpen = () => this.setState({dropDownIsOpen: !this.state.dropDownIsOpen});

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.widget.id !== this.props.widget.id) {
            this.setState({
                widget : this.props.widget
            })
        }
    }

    handleWidgetName = () => {
        if(this.state.widget.type === "HEADING")
            return <div>Heading Widget</div>;
        else if(this.state.widget.type === "PARAGRAPH")
            return <div>Paragraph Widget</div>;
    };

    render() {
        const menuClass = `dropdown-menu${this.state.dropDownIsOpen ? " show" : ""}`;
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
                                <button onClick={() => this.props.editWidget(this.state.widget)} className="btn btn-success float-right">Save</button>
                                <div className="d-inline-flex float-right pr-2 my-auto">
                                    <div className="dropdown" onClick={this.toggleOpen}>
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup={true}
                                                aria-expanded={false}>
                                            {this.state.widget.type.slice(0,1) + this.state.widget.type.slice(1).toLowerCase()}
                                        </button>
                                        <div className={menuClass} aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Heading</a>
                                            <a className="dropdown-item" href="#">List</a>
                                            <a className="dropdown-item" href="#">Image</a>
                                            <a className="dropdown-item" href="#">Paragraph</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-inline-flex float-right pr-2 pt-1">
                                    <button className="btn btn-warning btn-sm">
                                        <i className="fas fa-arrow-down"/>
                                    </button>
                                </div>
                                <div className="d-inline-flex float-right pr-2 pt-1">
                                    <button className="btn btn-warning btn-sm">
                                        <i className="fas fa-arrow-up"/>
                                    </button>
                                </div>
                            </div>

                        {
                            this.state.widget.type === "HEADING" &&
                            <HeadingWidgetComponent
                                widget={this.props.widget}/>
                        }
                        {
                            this.state.widget.type === "PARAGRAPH" &&
                            <ParagraphWidgetComponent
                                widget = {this.props.widget}/>
                        }
                     </div>
                 </div>
                <br />
            </div>
        )
    }
};