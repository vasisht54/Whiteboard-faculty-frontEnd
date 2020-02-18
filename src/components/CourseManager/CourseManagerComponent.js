import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseListHeaderComponent from "./CourseListHeaderComponent";
import CourseEditorComponent from "../CourseEditor/CourseEditorComponent";
import {findAllCourses} from "../../services/CourseService";


class CourseManagerComponent extends React.Component {
    state = {
        layout: "table",
        showEditor: false,
        courses: []
    };

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                              })
            })
    };

    setGrid = () =>
        this.setState({
            layout: 'grid'
                      });

    setTable = () =>
        this.setState({
            layout: 'table'
                      });


    addCourse = () =>
        this.setState(prevState => {
            return({
                courses: [...prevState.courses, {
                    _id: (new Date).getTime(),
                    title: 'New Course'
                }]
            })
        });

    showEditor = () =>
        this.setState({
            showEditor: true
                      });

    closeEditor = () =>
        this.setState({
                          showEditor: false
                      });

    render() {
        return (
            <div>
                {   !this.state.showEditor &&
                    <div>
                        {console.log(this.state.courses)}
                        <CourseListHeaderComponent addCourse={this.addCourse}/>
                        <div className="float-right">
                            <button onClick={this.setGrid} className="btn wbdv-button wbdv-grid-layout wbdv-button wbdv-list-layout">
                                <i className="fas fa-th"/>
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={this.setTable} className="btn wbdv-button wbdv-table-layout wbdv-list-layout">
                                <i className="fas fa-list-ul"/>
                            </button>
                        </div>
                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent showEditor={this.showEditor} courses={this.state.courses}/>
                        }
                        {
                            this.state.layout === 'grid' &&
                            <CourseGridComponent courses={this.state.courses}/>
                        }
                    </div>
                }
                {
                    this.state.showEditor &&
                    <CourseEditorComponent closeEditor = {this.closeEditor}  />
                }
            </div>
        )
    }
}

export default CourseManagerComponent;