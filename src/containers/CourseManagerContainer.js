import React from "react";
import CourseTableContainer from "./CourseTableContainer";
import CourseGridContainer from "./CourseGridContainer";
import CourseListHeaderComponent from "../components/CourseManager/CourseListHeaderComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {createCourse, findAllCourses} from "../services/CourseService";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

/*const initialState = {
    modules: [
        {_id: "123", title: "Module 1"},
        {_id: "234", title: "Module 3"},
        {_id: "345", title: "Module 2"}
    ]
}

const moduleFSM = (state = initialState, action) => state;

const store = createStore(moduleFSM);*/

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        newCourseTitle: '',
        courses: [],
        showEditor: false
    };


    componentDidMount() {

        findAllCourses()
            .then(courses => {
                this.setState({
                    courses
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
                                courses
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
            /*<Provider store={store}>*/
            <div>
               {/* <Router>
                    {
                        !this.state.showEditor &&
                        <div>
                            <CourseListHeaderComponent onTextEntry={this.onTextEntry} addCourse={this.addCourse}/>
                            <div className="float-right">
                                <Link to="/course-list/grid">
                                    <button onClick={this.setGrid}
                                            className="btn wbdv-button wbdv-grid-layout wbdv-button wbdv-list-layout">
                                        <i className="fas fa-th"/>
                                    </button>
                                </Link>
                                &nbsp;&nbsp;&nbsp;
                                <Link to="/course-list/table">
                                    <button onClick={this.setTable}
                                            className="btn wbdv-button wbdv-table-layout wbdv-list-layout">
                                        <i className="fas fa-list-ul"/>
                                    </button>
                                </Link>
                            </div>

                            <Route path="/table"
                                   exact={true}
                                   render=
                                       {() =>
                                           <CourseTableContainer

                                               showEditor={this.showEditor}
                                               courses={this.state.courses}
                                           />
                                       }
                            />
                            <Route path="/grid"
                                   exact={true}
                                   render=
                                       {() =>
                                           <CourseGridContainer

                                               courses={this.state.courses}
                                               showEditor={this.showEditor}
                                           />
                                       }
                            />
                        </div>
                    }
                    {
                        this.state.showEditor &&
                        <CourseEditorComponent closeEditor={this.closeEditor} />
                    }

                </Router>*/}
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
                            <CourseTableContainer  showEditor={this.showEditor} courses={this.state.courses}/>
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
            /*</Provider>*/
        )
    }
}



export default CourseManagerContainer;