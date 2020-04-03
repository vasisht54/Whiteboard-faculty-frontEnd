import React from "react";
import InputFieldComponent from "../InputFieldComponent";

export default class paragraphWidgetComponent extends React.Component {
    render() {
        return(
            <div className="card col">
                <div className="row">
                    <div className="col-sm-3"><h3>Paragraph Widget</h3></div>
                    <div className="col-sm-9">
                        <div className="d-inline-flex float-right pt-1">
                            <button className="btn badge-danger btn-sm">X</button>
                        </div>
                        <div className="d-inline-flex float-right pr-2 pt-2 my-auto">
                            <label>
                                <select className="dropdown">
                                    <option>Heading</option>
                                    <option>List</option>
                                    <option>Image</option>
                                    <option>Paragraph</option>
                                </select>
                            </label>
                        </div>
                        <div className="d-inline-flex float-right pr-2 pt-1">
                            <button className="btn badge-warning btn-sm">
                                <i className="fas fa-arrow-down"/>
                            </button>
                        </div>
                        <div className="d-inline-flex float-right pr-2 pt-1">
                            <button className="btn btn-warning btn-sm">
                                <i className="fas fa-arrow-up"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <InputFieldComponent placeHolder="Heading text" />
                    <div className="row p-1">
                        <select className="form-control">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                            <option>Heading 4</option>
                        </select>
                    </div>
                    <InputFieldComponent placeHolder="Widget name" />
                    <br/>
                    <div className="row p-1">
                        <h4>Preview</h4>
                    </div>
                    <div className="row p-1">
                        <h2>Heading text</h2>
                    </div>
                </div>
            </div>
        )
    }
}
