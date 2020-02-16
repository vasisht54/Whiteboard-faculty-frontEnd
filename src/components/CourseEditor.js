import React from "react";

const CourseEditor = () =>
    <div>
        <h2>Course Editor</h2>
        <div className="row">
            <div className="col-4">
                <h4>Module List</h4>
                <ul>
                    <li>Module 1</li>
                    <li>Module 2</li>
                    <li>Module 3</li>
                </ul>
            </div>
            <div className="col-8">
                <h4>Lesson Tabs</h4>
                <ul>
                    <li>Lesson 1</li>
                    <li>Lesson 2</li>
                    <li>Lesson 3</li>
                </ul>
            </div>
        </div>
    </div>

export default CourseEditor;