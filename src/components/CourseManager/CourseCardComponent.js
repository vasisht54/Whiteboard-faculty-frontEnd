import React from "react";

class CourseCardComponent extends React.Component {

    state = {
        editing: false
    };

    render() {
        return (

            <div className="card pl-3 m-3 col-lg-2 col-xl-2 col-m-3 col-sm-2">
                <div className="card-body">
                    <div>
                        <a href="#" onClick={this.props.showEditor} className="card-title h6 font-weight-bold">
                            {this.props.course.title}
                        </a>
                    </div>
                    <small className="card-text">
                        Sample text
                    </small>
                </div>
                <div className="card-footer">
                    <small className="card-footer-text">
                        {this.props.course._updatedAt}
                    </small>
                    <div>
                        <button className="btn wbdv-row wbdv-button wbdv-edit">
                            <i className="fas fa-pencil-alt"/>
                        </button>
                        <button onClick={() => this.props.deleteCourse(this.props.course)}
                                className="btn wbdv-row wbdv-button wbdv-delete float-right">
                            <i className="far fa-trash-alt"/>
                        </button>
                    </div>
                </div>
            </div>
       )
    }
}

export default CourseCardComponent;