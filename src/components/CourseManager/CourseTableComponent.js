import React from "react";
import CourseTableHeadComponent from "./CourseTableHeadComponent";

const CourseTableComponent = () =>
    <div className="table-responsive-sm">
        <table className="table table-sm">
            <thead className="thead-light">
                <CourseTableHeadComponent />
            </thead>
            <tbody>
            <tr className="wbdv-row wbdv-course">
                <td scope="row"><i className="fas fa-file-alt wbdv-row wbdv-icon"></i> &nbsp;<a className="wbdv-bold wbdv-row wbdv-title" href="course-editor.template.client.html">CS5500 Software Engineering Graduate</a></td>
                <td className="wbdv-row wbdv-owner">me</td>
                <td className="wbdv-row wbdv-modified-date">6:45 PM</td>
                <td>
                    <button className="btn wbdv-row wbdv-button wbdv-delete"><i className="far fa-trash-alt"></i></button>
                </td>
            </tr>
            <tr className="wbdv-row wbdv-course">
                <td scope="row"><i className="fas fa-file-alt wbdv-row wbdv-icon"></i> &nbsp;<a className="wbdv-bold wbdv-row wbdv-title" href="course-editor.template.client.html">CS4550 Software Engineering Undergraduate</a></td>
                <td className="wbdv-row wbdv-owner">me</td>
                <td className="wbdv-row wbdv-modified-date">6:45 PM</td>
                <td>
                    <button className="btn wbdv-row wbdv-button wbdv-delete"><i className="far fa-trash-alt"></i></button>
                </td>
            </tr>
            <tr className="wbdv-row wbdv-course">
                <td scope="row"><i className="fas fa-file-alt wbdv-row wbdv-icon"></i> &nbsp;<a className="wbdv-bold wbdv-row wbdv-title" href="course-editor.template.client.html">CS4500 WebDev Undergraduate</a></td>
                <td className="wbdv-row wbdv-owner">me</td>
                <td className="wbdv-row wbdv-modified-date">6:45 PM</td>
                <td>
                    <button className="btn wbdv-row wbdv-button wbdv-delete"><i className="far fa-trash-alt"></i></button>
                </td>
            </tr>
            <tr className="wbdv-row wbdv-course">
                <td scope="row"><i className="fas fa-file-alt wbdv-row wbdv-icon"></i> &nbsp;<a className="wbdv-bold wbdv-row wbdv-title" href="course-editor.template.client.html">CS5610 WebDev Graduate</a></td>
                <td className="wbdv-row wbdv-owner">me</td>
                <td className="wbdv-row wbdv-modified-date">6:45 PM</td>
                <td>
                    <button className="btn wbdv-row wbdv-button wbdv-delete"><i className="far fa-trash-alt"></i></button>
                </td>
            </tr>
            <tr className="wbdv-row wbdv-course">
                <td scope="row"><i className="fas fa-file-alt wbdv-row wbdv-icon"></i> &nbsp;<a className="wbdv-bold wbdv-row wbdv-title" href="course-editor.template.client.html">CS5200 Intro to Databases</a></td>
                <td className="wbdv-row wbdv-owner">me</td>
                <td className="wbdv-row wbdv-modified-date">6:44 PM</td>
                <td>
                    <button className="btn wbdv-row wbdv-button wbdv-delete"><i className="far fa-trash-alt"></i></button>
                </td>
            </tr>
            </tbody>
        </table>
        <div className="">
            <button className="btn wbdv-button wbdv-add-file"><i className="fas fa-plus-circle fa-3x col-sm-1"></i></button>
        </div>
    </div>;

export default CourseTableComponent;