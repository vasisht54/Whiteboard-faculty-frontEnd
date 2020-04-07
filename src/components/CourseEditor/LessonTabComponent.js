import React from "react";
import {Link} from "react-router-dom";

class LessonTabComponent extends React.Component{

    state = {
        editing: false,
        lesson: this.props.lesson
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.lesson._id !== this.props.lesson._id) {
            this.setState({
                lesson : this.props.lesson
            })
        }
    }

    findTopics = () =>
        this.props.findTopicsForLesson(this.state.lesson._id);

    onTextEntry = (title) => {
        this.setState({
                lesson: {
                    ...this.state.lesson,
                    title
                }
            }, function () {
                       console.log("onChange", this.state.lesson.title)
            }
        )
    };

    render() {
        const lessonTabClass = `nav-link${this.props.activeLessonId === this.state.lesson._id ? " active" : ""}`;
        return (
            <li className="nav-item">
                {
                    !this.state.editing ?
                    <div className={lessonTabClass}>
                        <Link onClick={this.findTopics} to={`/course-editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.state.lesson._id}`}>
                            {this.state.lesson.title}
                        </Link>
                        &nbsp;&nbsp;
                        <i onClick={() => this.setState(
                            prevState => {
                                return {
                                    ...prevState,
                                    editing: true
                                }
                            }
                        )}
                           className="fas btn fa-pencil-alt"/>
                    </div>
                        :
                    <div>
                        <input
                            value={this.state.lesson.title}
                            onChange={(e) => this.onTextEntry(e.target.value)} className="form-control"/>
                        <button className="btn wbdv-row wbdv-button wbdv-module-save" onClick={() => {
                            this.setState({editing: false});
                            this.props.editLesson(this.state.lesson)
                        }}><i className="fas btn fa-check"/>
                        </button>
                        <button onClick={() => {
                            this.setState({editing: false});
                            this.props.deleteLesson(this.props.lesson._id)}}
                                type="button"
                                className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                            X
                        </button>
                    </div>
                }
            </li>
        );
    }
}

export default LessonTabComponent;