import React from "react";
import CourseTableContainer from "./CourseTableContainer";
import CourseGridContainer from "./CourseGridContainer";
import CourseListHeaderComponent from "../components/CourseManager/CourseListHeaderComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {createCourse, findAllCourses} from "../services/CourseService";


class CourseManagerContainer extends React.Component {
    state = {
        layout: "grid",
        showEditor: false,
        newCourseTitle: '',
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

    onTextEntry = (title) =>
        this.setState({
            newCourseTitle: title
                      });

    addCourse = () => {
        this.setState(prevState => {
            createCourse({title: prevState.newCourseTitle, ownedBy: 'me'})
                .then(() => {
                    findAllCourses()
                        .then(courses => {
                            this.setState({
                                              courses: courses
                                          })
                        })
                      })
        })
    };

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
                {
                    !this.state.showEditor &&
                    <div>
                        <CourseListHeaderComponent onTextEntry={this.onTextEntry} addCourse={this.addCourse}/>
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
                            <CourseTableContainer showEditor={this.showEditor} courses={this.state.courses}/>
                        }
                        {
                            this.state.layout === 'grid' &&
                            <CourseGridContainer courses={this.state.courses} showEditor={this.showEditor}/>
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

export default CourseManagerContainer;