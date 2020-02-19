import React from "react";

const CourseCardList = () =>
    <ul className="pt-4 pl-4 card-container">
        <h4>Recent Documents</h4>
        <div className="card col-lg-2 col-xl-2 col-m-3 col-sm-2">
            <div className="card-body">
                <div className="card-title h4">
                    Title
                </div>
                <div className="card-text">
                    Sample text
                </div>
            </div>
            <div className="card-footer">
                <small className="card-footer-text">
                    Last updated date
                </small>
                <div>
                    <button className="btn wbdv-row wbdv-button wbdv-edit">
                        <i className="fas fa-pencil-alt"/>
                    </button>
                    <button className="btn wbdv-row wbdv-button wbdv-delete float-right">
                        <i className="far fa-trash-alt"/>
                    </button>
                </div>
            </div>
        </div>
    </ul>;

export default CourseCardList;