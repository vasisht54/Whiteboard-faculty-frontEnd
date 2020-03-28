import {CREATE_LESSON, DELETE_LESSON, FIND_LESSONS_FOR_MODULE} from "../actions/lessonActions";

const initialState = {
    lessons: []
};

const lessonReducer = (state = initialState, action) => {

    switch(action.type) {
        case CREATE_LESSON :
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            };

        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            };

        case FIND_LESSONS_FOR_MODULE:
            return {
                lessons: action.lessons
            };

        default : return state;
    }
};

export default lessonReducer;