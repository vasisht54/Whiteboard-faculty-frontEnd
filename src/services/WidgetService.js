/*
import {API_URL} from "../common/constants";

export const updateTopic = async (topicId, topic) => {
    const response = await fetch(`${API_URL}/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteTopic = async (topicId) => {
    const response = await fetch(`${API_URL}/topics/${topicId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const createTopic = async (lessonId, topic) =>
{
    const response = await fetch(`${API_URL}/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findTopicsForLesson = async(lessonId) => {
    const response = await fetch(`${API_URL}/lessons/${lessonId}/topics`);
    return await response.json();
};

export const findTopic = async(topicId) => {
    const response = await fetch(`${API_URL}/topics/${topicId}`);
    return await response.json();
};

export default {
    findTopic,
    findTopicsForLesson,
    createTopic,
    deleteTopic,
    updateTopic
}*/

const findWidgetsForTopic = async(topicId) => {
    const response = await fetch(`http://localhost:3000/course-editor/5e82c1ef6210ee0017ae18a6/modules/5e82c3c06210ee0017ae18ad/lessons/5e82c4206210ee0017ae18b3/topics/${topicId}/widgets`);
    return await response.json();
};

export default {
    findWidgetsForTopic
}