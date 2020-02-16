import React from "react";
import {TopicList} from "./TopicList";

export const MainContent = () =>

    <div className="container svms-main-content">
        <TopicList topics = {[
            {title: "Topic 1"},
            {title: "Topic 2"},
            {title: "Topic 3"},
            {title: "Topic 4"},
            {title: "+"},
        ]}/>
        <div className="container svms-misc-buttons">
            <div className="row">
                <div className="col-7"/>
                <div className="col-5">
                    <button id="PreviewToggleBtn" className="float-right btn d-inline-flex toggle-btn">
                        <h5>Preview &nbsp;</h5>
                        {/*<i style={vertical-align: middle} className="fas align-middle fa-toggle-off fa-2x"></i>*/}
                        <i className="fas align-middle fa-toggle-off fa-2x"/>
                    </button>
                    <button className="btn btn-success float-right">Save</button>
                </div>
            </div>
        </div>
        <div className="row m-3">
            <div className="card col">
                <div className="row">
                    <div className="col-sm-3"><h3>Heading Widget</h3></div>
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
                    <div className="row p-1">
                        <input className="form-control" placeholder="Heading text"/>
                    </div>
                    <div className="row p-1">
                        <select className="form-control">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                            <option>Heading 4</option>
                        </select>
                    </div>
                    <div className="row p-1">
                        <input className="form-control" placeholder="Widget name"/>
                    </div>
                    <br/>
                    <div className="row p-1">
                        <h4>Preview</h4>
                    </div>
                    <div className="row p-1">
                        <h2>Heading text</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="float-right">
            <button className="btn">
                <i className="fas fa-plus-circle fa-2x"/>
            </button>
        </div>
    </div>;