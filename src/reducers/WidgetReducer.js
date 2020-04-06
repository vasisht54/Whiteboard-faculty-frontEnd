import {CREATE_WIDGET, DELETE_WIDGET, FIND_WIDGETS_FOR_TOPIC} from "../actions/widgetActions";

const initialState = {
    widgets: []
};

const widgetReducer = (state = initialState, action) => {

    switch(action.type) {
        case CREATE_WIDGET :
            console.log("Inside reducer", action.newWidget);
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            };

        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };

        case FIND_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            };

        default : return state;
    }
};

export default widgetReducer;