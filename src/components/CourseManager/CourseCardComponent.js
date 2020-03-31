import React from "react";
import {Link} from "react-router-dom";

class CourseCardComponent extends React.Component {

    state = {
        editing: false,
        course: this.props.course
    };

    render() {
        return (
            <div className="card pl-3 m-3 col-lg-2 col-xl-2 col-m-3 col-sm-2">
                <div className="card-body">
                    <div>
                        {   !this.state.editing ?
                            <Link to={`/course-editor/${this.props.course._id}`}>
                                {this.state.course.title}
                            </Link>
                            :
                            <input onChange={(e) =>
                                                this.props.onTextEntry(e.target.value)
                                            }
                                   className="form-control"
                            />
                        }
                    </div>
                    <small className="card-text">
                        Sample text
                    </small>
                </div>
                <div className="card-footer">
                    <small className="card-footer-text">
                        {this.props.course._updatedAt}
                    </small>
                    {   !this.state.editing ?
                        <div>
                            <button onClick={() => this.setState({editing: true})}
                                    className="btn wbdv-row wbdv-button wbdv-edit">
                                <i className="fas fa-pencil-alt"/>
                            </button>
                            <button onClick={() => this.props.deleteCourse(this.props.course)}
                                    className="btn wbdv-row wbdv-button wbdv-delete float-right">
                                <i className="far fa-trash-alt"/>
                            </button>
                        </div>
                        :
                        <div>
                            <button className="btn wbdv-row wbdv-button wbdv-save" onClick={() => {
                                this.setState({editing: false});
                                this.props.editCourse(this.props.course)
                            }}><i className="fas fa-check"/>
                            </button>
                        </div>
                    }

                </div>
            </div>
       )
    }
}

export default CourseCardComponent;