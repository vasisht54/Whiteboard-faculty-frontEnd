const initialState = {
    widgets: []
};

const widgetReducer = (state = initialState, action) => {
    switch(action.type) {

        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
            };

        default: return state;
    }
};

export default widgetReducer;