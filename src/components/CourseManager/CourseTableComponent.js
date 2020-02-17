import React from "react";
import CourseTableHeadComponent from "./CourseTableHeadComponent";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = () =>
    <div className="table-responsive-sm">
        <table className="table table-sm">
            <thead className="thead-light">
                <CourseTableHeadComponent />
            </thead>
            <CourseRowComponent courses = {[
                {
                    title: "CS 5200 - DBMS",
                    ownedBy: "me",
                    lastModified: "1/1/2020"
                },
                {
                    title: "CS 5800 - Algo",
                    ownedBy: "me",
                    lastModified: "2/2/2020"
                }
            ]}/>
        </table>
        <div className="">
            <button className="btn wbdv-button wbdv-add-file"><i className="fas fa-plus-circle fa-3x col-sm-1"/></button>
        </div>
    </div>;

export default CourseTableComponent;