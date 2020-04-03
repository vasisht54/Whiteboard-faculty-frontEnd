const initialState = {
    widgets: []
};

const widgetReducer = (state = initialState, action) => {
    switch(action.type) {

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            };

        default: return state;
    }
};

export default widgetReducer;