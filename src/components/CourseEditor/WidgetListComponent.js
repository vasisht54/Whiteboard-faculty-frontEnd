import React from "react";

const WidgetListComponent = () =>
    <div className="container svms-misc-buttons">
        <div className="row">
            <div className="col-7"/>
            <div className="col-5">
                <button id="PreviewToggleBtn" className="float-right btn d-inline-flex toggle-btn">
                    <h5>Preview &nbsp;</h5>
                    <i className="fas align-middle fa-toggle-off fa-2x"/>
                </button>
                <button className="btn btn-success float-right">Save</button>
            </div>
        </div>
    </div>;

export default WidgetListComponent;