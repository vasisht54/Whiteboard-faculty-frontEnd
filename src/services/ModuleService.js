import {API_URL} from "../common/constants";

const updateModule = async (moduleId, module) => {
    const response = await fetch(`${API_URL}/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

const deleteModule = async (moduleId) => {
    const response = await fetch(`${API_URL}/modules/${moduleId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

const createModule = async (courseId, module) =>
{
    const response = await fetch(`${API_URL}/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

const findModulesForCourse = async(courseId) => {
    const response = await fetch(`${API_URL}/courses/${courseId}/modules`);
    return await response.json();
};

const findModule = async(moduleId) => {
    const response = await fetch(`${API_URL}/modules/${moduleId}`);
    return await response.json();
};

export default  {
    findModule,
    findModulesForCourse,
    createModule,
    deleteModule,
    updateModule
}