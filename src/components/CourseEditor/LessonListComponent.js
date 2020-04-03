import React from "react";
import LessonTabComponent from "./LessonTabComponent";
import connect from "react-redux/lib/connect/connect";
import lessonService from "../../services/LessonService";
import {createLesson, deleteLesson, findLessonsForModule} from "../../actions/lessonActions";

class LessonListComponent extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId);
    }

    render() {
        return (
            <ul className="nav nav-tabs navbar-expand-md wbdv-topic-pill-list">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <LessonTabComponent {...this.props} {...this.props.courseId} moduleId = {this.props.moduleId} key = {lesson._id} lesson = {lesson}
                                            editLesson = {this.props.editLesson} deleteLesson = {this.props.deleteLesson}
                        />
                    )
                }
                <li className="nav-item wbdv-lesson-tab" key={this.props.moduleId}>
                    <div className="nav-link">
                        <i onClick={() =>
                            this.props.createLesson(this.props.moduleId,
                            {title: 'New Lesson'})} style={{color: "black"}} className="fas fa-plus"/>
                    </div>
                </li>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {lessons: state.lessons.lessons}
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonsForModule: async(moduleId) => {
            const actualLessons = await lessonService.findLessonsForModule(moduleId);
            dispatch(findLessonsForModule(actualLessons));
        },
        deleteLesson: (lessonId) => {
            lessonService.deleteLesson(lessonId)
                .then(response =>
                    dispatch(deleteLesson(lessonId))
                )
        },
        createLesson: (moduleId, lesson) => {
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

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonListComponent);