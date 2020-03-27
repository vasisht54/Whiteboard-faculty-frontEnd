import React from "react";
import CourseListHeaderComponent from "./CourseManager/CourseListHeaderComponent";
import CourseTableContainer from "../containers/CourseTableContainer";
import CourseGridContainer from "../containers/CourseGridContainer";

const CourseListComponent = ({onTextEntry, addCourse, setTable, layout, setGrid, courses}) =>
    <div>
        <CourseListHeaderComponent onTextEntry={onTextEntry} addCourse={addCourse}/>
        <div className="float-right">
            <button onClick={setGrid} className="btn wbdv-button wbdv-grid-layout wbdv-button wbdv-list-layout">
                <i className="fas fa-th"/>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={setTable} className="btn wbdv-button wbdv-table-layout wbdv-list-layout">
                <i className="fas fa-list-ul"/>
            </button>
        </div>
        {
            layout === 'table' &&
            <CourseTableContainer courses={courses}/>
        }
        {
            layout === 'grid' &&
            <CourseGridContainer courses={courses} />
        }
    </div>;
export default CourseListComponent;