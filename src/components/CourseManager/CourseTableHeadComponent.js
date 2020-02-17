import React from "react";

const CourseTableHeadComponent = () =>
    <tr>
        <th className="wbdv-header wbdv-title pb-3" scope="col">Title</th>
        <th className="wbdv-header wbdv-owner pb-3" scope="col">Owned By</th>
        <th className="wbdv-header wbdv-last-modified" scope="col">Last Modified by me
            <button className="btn btn-sm"><i className="fas fa-sort-down"/></button>
            &nbsp;&nbsp;&nbsp;
            <button className="btn wbdv-button wbdv-grid-layout wbdv-button wbdv-list-layout"><i className="fas fa-th"/></button>
            &nbsp;&nbsp;&nbsp;
            <button className="btn wbdv-header wbdv-sort"><i className="fas fa-sort-alpha-down"/></button>
        </th>
        <th/>
    </tr>;

export default CourseTableHeadComponent;