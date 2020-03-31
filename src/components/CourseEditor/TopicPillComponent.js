import React from "react";
import {Link} from "react-router-dom";

class TopicPillComponent extends React.Component {

    state = {
        editing: false,
        topic: this.props.topic
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topic._id !== this.props.topic._id) {
            this.setState({
                topic : this.props.topic
            })
        }
    }

    onTextEntry = (title) => {
        this.setState({
                topic: {
                    ...this.state.topic,
                    title
                }
            }, function () {
                       console.log("onChange", this.state.topic.title)
            }
        )
    };

    render() {
        return (
            <li className="nav-item wbdv-topic-pill">
            {/*    <a className="nav-link shadow" href="#">{this.props.topic.title}</a>*/}
                {
                    !this.state.editing ?
                        <div>
                            <Link to={`/course-editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lessonId}/topics/${this.state.topic._id}`}>
                                <div className="nav-link shadow">{this.state.topic.title}</div>
                            </Link>
                            <i onClick={() => this.setState(
                                prevState => {
                                    return {
                                        ...prevState,
                                        editing: true
                                    }
                                }
                            )} className="fas float-right fa-pencil-alt"/>

                        </div>
                        :
                        <div>
                            <input
                                value={this.state.topic.title}
                                onChange={(e) => this.onTextEntry(e.target.value)} className="form-control"/>
                            <i onClick={() => {
                                this.setState({editing: false});
                                this.props.editTopic(this.state.topic)
                            }} className="fas fa-check"/>

                            <button onClick={() => {
                                this.setState({editing: false});
                                this.props.deleteTopic(this.props.topic._id)}}
                                    type="button"
                                    className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                                X
                            </button>
                        </div>
                }
            </li>
        )
    }
}

export default TopicPillComponent;