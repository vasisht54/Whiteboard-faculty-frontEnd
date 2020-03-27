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

    onTextEntry = (title) => {
        this.setState({
                module: {
                    ...this.state.module,
                    title
                }
            }, function () {
         /*       console.log("onchng", this.state.module)*/
            }
        )
    }
    render() {
        return (
            <li className="nav-item bg-dark pl-3 wbdv-module-item">
                {   !this.state.editing ?
                    /*<a className="nav-link list-group-item my-2 font-weight-bolder wbdv-module-item-title">*/
                    <div className="nav-link list-group-item my-2 font-weight-bolder wbdv-module-item-title">
                        <Link to={`/course-editor/${this.props.match.params.courseId}/modules/${this.props.module._id}`}>
                            {this.state.module.title}
                        </Link>
                        <button className="float-right" onClick={() => this.setState(
                            prevState => {
                                return {
                                    ...prevState,
                                    editing: true
                                }
                            }
                        )}>
                            <i className="fas fa-pencil-alt"/>
                        </button>
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