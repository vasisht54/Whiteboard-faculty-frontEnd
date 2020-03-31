import {API_URL} from "../common/constants";

export const updateCourse = async (courseId, course) => {
    const response = await fetch(`${API_URL}/courses/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteCourse = async (courseId) => {
    const response = await fetch(`${API_URL}/courses/${courseId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const createCourse = async (course) =>
{
    const response = await fetch(`${API_URL}/courses`, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findAllCourses = async() => {
    const response = await fetch(`${API_URL}/courses`);
    return await response.json();
};

export const findCourseById = async(id) => {
    const response = await fetch(`${API_URL}/courses/${id}`);
    return await response.json();
};

export default {
    findCourseById,
    findAllCourses,
    deleteCourse,
    createCourse,
    updateCourse
}
