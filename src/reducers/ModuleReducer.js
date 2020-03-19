import {CREATE_MODULE, DELETE_MODULE, FIND_MODULES_FOR_COURSE} from "../actions/moduleActions";

const initialState = {
    lessons: [],
    topics: [],
    modules: [
        {_id: "123", title: "Module 1"},
        {_id: "234", title: "Module 3"},
        {_id: "345", title: "Module 2"}
    ]
};

const moduleReducer = (state = initialState, action) => {

    switch(action.type) {
        case CREATE_MODULE :
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            };

        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            };

        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            };

        default : return state;
    }
};

export default moduleReducer;