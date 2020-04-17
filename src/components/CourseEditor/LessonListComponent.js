import React from "react";
import LessonTabComponent from "./LessonTabComponent";
import connect from "react-redux/lib/connect/connect";
import lessonService from "../../services/LessonService";
import topicService from "../../services/TopicService"
import {createLesson, deleteLesson, findLessonsForModule} from "../../actions/lessonActions";
import {findTopicsForLesson} from "../../actions/topicActions";

class LessonListComponent extends React.Component {

    componentDidMount() {
        /*this.props.findLessonsForModule(this.props.moduleId);*/
        this.props.findTopicsForLesson(this.props.lessonId)
    }

    render() {
        return (
            <ul className="nav nav-tabs navbar-expand-md wbdv-topic-pill-list">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <LessonTabComponent {...this.props}
                                            {...this.props.courseId}
                                            moduleId = {this.props.moduleId}
                                            activeLessonId = {this.props.match.params.lessonId}
                                            key = {lesson._id}
                                            lesson = {lesson}
                                            editLesson = {this.props.editLesson}
                                            deleteLesson = {this.props.deleteLesson}

                        />
                    )
                }
                {
                    this.props.moduleId &&
                    <li key={this.props.moduleId}>
                        <div className="pt-2">
                            <i onClick={() =>
                                this.props.createLesson(this.props.moduleId,
                                {title: 'New Lesson'})} style={{color: "black"}} className="fas btn fa-plus"/>
                        </div>
                    </li>
                }
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
        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(actualTopics =>
                    dispatch(findTopicsForLesson(actualTopics))
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
