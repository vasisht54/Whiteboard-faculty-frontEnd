import React from "react";

const CourseRowComponent = ({courses, deleteCourse}) =>
    <tbody>
    {
        courses.map(course =>
            <tr key={course._id} className="wbdv-row wbdv-course">
                <td scope="row"><i className="fas fa-file-alt wbdv-row wbdv-icon"/> &nbsp;
                    <a className="wbdv-bold wbdv-row wbdv-title" href="course-editor.template.client.html">
                        {course.title}
                    </a>
                </td>
                <td className="wbdv-row wbdv-owner">{course.ownedBy}</td>
                <td className="wbdv-row wbdv-modified-date">{course.lastModified}</td>
                <td>
                    <button onClick={() => deleteCourse(course)} className="btn wbdv-row wbdv-button wbdv-delete">
                        <i className="far fa-trash-alt"/>
                    </button>
                </td>
            </tr>
        )
    }
    </tbody>;

export default CourseRowComponent;