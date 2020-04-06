import React from "react";
import {Link} from "react-router-dom";

class CourseRowComponent extends React.Component {
    state = {
        editing: false
    };

    render() {
        return(
            <tr key={this.props.course._id} className="wbdv-row wbdv-course">
                {   !this.state.editing ?
                    <td>
                        <i className="fas fa-file-alt wbdv-row wbdv-icon"/>&nbsp;&nbsp;
                        <Link to={`/course-editor/${this.props.course._id}`}>
                            {this.props.course.title}
                        </Link>
                    </td>
                             :
                    <td>
                        <i className="fas fa-file-alt wbdv-row wbdv-icon"/>
                        <input
                            onChange={(e) => this.props.onTextEntry(e.target.value)}
                               className="form-control w-75"/>
                    </td>
                }
                <td className="wbdv-row wbdv-owner">{this.props.course.ownedBy}</td>
                <td className="wbdv-row wbdv-modified-date">{this.props.course._updatedAt}</td>
                {
                    !this.state.editing ?
                    <td>
                        <button onClick={() => this.setState({editing: true})}
                                className="btn wbdv-row wbdv-button wbdv-edit">
                            <i className="fas fa-pencil-alt"/>
                        </button>
                        <button onClick={() => this.props.deleteCourse(this.props.course)}
                                className="btn wbdv-row wbdv-button wbdv-delete">
                            <i className="far fa-trash-alt"/>
                        </button>
                    </td>
                             :
                    <td>
                        <button className="btn wbdv-row wbdv-button wbdv-save" onClick={() => {
                            this.setState({editing: false});
                            this.props.editCourse(this.props.course)
                        }}><i className="fas fa-check"/>
                        </button>
                    </td>
                }
            </tr>
        )
    }
}
export default CourseRowComponent;