import React from "react";
import {Link} from "react-router-dom";

class ModuleItemComponent extends React.Component {
    state = {
        editing: false,
        module: this.props.module
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.module._id !== this.props.module._id) {
            this.setState({
                module: this.props.module
            })
        }
    }

    findLessons = () => {
        this.props.findLessonsForModule(this.state.module._id);
    };

    onTextEntry = (title) => {
        this.setState({
                module: {
                    ...this.state.module,
                    title
                }
            }
        )
    };
    render() {
        const moduleItemClass = `nav-link list-group-item my-2 font-weight-bolder wbdv-module-item-title${this.props.activeModuleId === this.state.module._id ? " bg-primary" : ""}`;
        return (
            <li className="nav-item bg-dark pl-3 wbdv-module-item">
                {   !this.state.editing ?
                    <div className={moduleItemClass}>
                        <Link className = "wbdv-module-title" onClick={this.findLessons}
                          to={`/course-editor/${this.props.courseId}/modules/${this.state.module._id}`}>
                            {this.state.module.title}
                        </Link>

                        <i onClick={() => this.setState(
                            prevState => {
                                return {
                                    ...prevState,
                                    editing: true
                                }
                            }
                        )}
                       className="fas btn module-edit-btn float-right fa-pencil-alt"/>
                    </div>
                    :
                    <div>
                        <input
                            value={this.state.module.title}
                            onChange={(e) => this.onTextEntry(e.target.value)} className="form-control"/>
                        <button className="btn wbdv-row wbdv-button wbdv-module-save" onClick={() => {
                            this.setState({editing: false});
                            //this.props.editModule(this.props.module._id, {title: this.state.updatedModuleTitle})
                            this.props.editModule(this.state.module)
                        }}><i className="fas fa-check" style={{color: "white"}}/>
                        </button>
                        <button onClick={() => {
                            this.setState({editing: false});
                            this.props.deleteModule(this.props.module._id)}}
                                type="button"
                                style={{color: "white"}}
                                className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                            X
                        </button>
                    </div>
                }
            </li>
        )
    }
}
export default ModuleItemComponent;