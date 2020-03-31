export const CREATE_TOPIC = "CREATE_TOPIC";
export const createTopic = (topic) => ({
        type: CREATE_TOPIC,
        newTopic: topic
    }
);

export const DELETE_TOPIC = "DELETE_TOPIC";
export const deleteTopic = (topicId) => (
    {
        type: DELETE_TOPIC,
        topicId
    }
);

export const EDIT_TOPIC = "EDIT_TOPIC";
export const editTopic = topicId => (
    {
        type: EDIT_TOPIC,
        topicId
    }
);

export const FIND_TOPICS_FOR_LESSON = 'FIND_TOPICS_FOR_LESSON';
export const findTopicsForLesson = topics => (
    {
        type: FIND_TOPICS_FOR_LESSON,
        topics
    }
);
