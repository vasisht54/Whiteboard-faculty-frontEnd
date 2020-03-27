import React from "react";
import LessonTabComponent from "./LessonTabComponent";
import connect from "react-redux/lib/connect/connect";
import lessonService from "../../services/LessonService";
import {createLesson, deleteLesson, findLessonsForModule} from "../../actions/lessonActions";

class LessonListComponent extends React.Component { /*= ({lessons}) =>*/

    componentDidMount() {
        /*this.props.findLessonsForModule(this.props.match.params.moduleId);*/
    }

    render() {
        return (
            <ul className="nav nav-tabs navbar-expand-md wbdv-topic-pill-list">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <LessonTabComponent key = {lesson._id} lesson = {lesson} />
                    )
                }
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {lessons: state.lessons.lessons}
};

const dispatchToPropertyMapper = dispatch => {
    return {
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(actualLessons =>
                    dispatch(findLessonsForModule(actualLessons)))
        },
        deleteLesson: lessonId => {
            lessonService.deleteLesson(lessonId)
                .then(response =>
                    dispatch(deleteLesson(lessonId))
                )
        },
        createModule: (moduleId, lesson) => {
            lessonService.createLesson(moduleId, lesson)
                .then(response =>
                    dispatch(createLesson(response))
                )
        },
        editLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson)
                .then(response =>
                    lessonService.findLessonsForModule(lesson._modules)
                        .then(actualLessons => {
                                dispatch(findLessonsForModule(actualLessons))
                            }
                        )

                )
        }
    };
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper())(LessonListComponent);