export const CREATE_LESSON = "CREATE_LESSON";
export const createLesson = (lesson) => ({
        type: CREATE_LESSON,
        newLesson: lesson
    }
);

export const DELETE_LESSON = "DELETE_LESSON";
export const deleteLesson = (lessonId) => (
    {
        type: DELETE_LESSON,
        lessonId
    }
);

export const EDIT_LESSON = "EDIT_LESSON";
export const editLesson = lessonId => (
    {
        type: EDIT_LESSON,
        lessonId
    }
);

export const FIND_LESSONS_FOR_MODULE = 'FIND_LESSONS_FOR_MODULE';
export const findLessonsForModule = modules => (
    {
        type: FIND_LESSONS_FOR_MODULE,
        modules
    }
);
