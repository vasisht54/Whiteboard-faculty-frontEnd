import {API_URL} from "../common/constants";

export const updateLesson = async (lessonId, lesson) => {
    const response = await fetch(`${API_URL}/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteLesson = async (lessonId) => {
    const response = await fetch(`${API_URL}/lessons/${lessonId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const createLesson = async (moduleId, lesson) =>
{
    const response = await fetch(`${API_URL}/modules/${moduleId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findLessonsForModule = async(moduleId) => {
    const response = await fetch(`${API_URL}/modules/${moduleId}/modules`);
    return await response.json();
};

export const findLesson = async(lessonId) => {
    const response = await fetch(`${API_URL}/lessons/${lessonId}`);
    return await response.json();
};