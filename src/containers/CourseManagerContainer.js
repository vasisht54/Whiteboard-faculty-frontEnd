import React from "react";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {createCourse, findAllCourses} from "../services/CourseService";
import CourseListComponent from "../components/CourseListComponent";
import {BrowserRouter, Route} from "react-router-dom";

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

    render() {
        return (
            <div>

                <BrowserRouter>
                <Route path ="/"
                       exact={true}
                       render={(props) =>
                    <CourseListComponent onTextEntry = {this.onTextEntry}
                                         {...props}
                                         addCourse = {this.addCourse}
                                         setGrid = {this.setGrid}
                                         layout = {this.state.layout}
                                         courses = {this.state.courses}
                                         setTable = {this.setTable}
                    />
                }/>

                <Route
                        path="/course-editor/:courseId"
                        exact = {true}
                        render={(props) => <CourseEditorComponent {...props}/>
                    }/>
                </BrowserRouter>
            </div>
        )
    }
}



export default CourseManagerContainer;