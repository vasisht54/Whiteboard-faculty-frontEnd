export const CREATE_MODULE = "CREATE_MODULE";
export const createModule = (module) => ({
        type: CREATE_MODULE,
        newModule: module
    }
);

export const DELETE_MODULE = "DELETE_MODULE";
export const deleteModule = (moduleId) => (
    {
        type: DELETE_MODULE,
        moduleId
    }
);

export const EDIT_MODULE = "EDIT_MODULE";
export const editModule = moduleId => (
    {
        type: EDIT_MODULE,
        moduleId
    }
);

export const FIND_MODULES_FOR_COURSE = 'FIND_MODULES_FOR_COURSE';
export const findModulesForCourse = modules => (
    {
        type: FIND_MODULES_FOR_COURSE,
        modules
    }
);
