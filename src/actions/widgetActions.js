export const CREATE_WIDGET = "CREATE_WIDGET";
export const createWidget = (widget) => ({
        type: CREATE_WIDGET,
        newWidget: widget
    }
);

export const DELETE_WIDGET = "DELETE_WIDGET";
export const deleteWidget = (widgetId) => (
    {
        type: DELETE_WIDGET,
        widgetId
    }
);

export const EDIT_WIDGET = "EDIT_WIDGET";
export const editWidget = widgetId => (
    {
        type: EDIT_WIDGET,
        widgetId
    }
);

export const FIND_WIDGETS_FOR_TOPIC = 'FIND_WIDGETS_FOR_TOPIC';
export const findWidgetsForTopic = widgets => (
    {
        type: FIND_WIDGETS_FOR_TOPIC,
        widgets
    }
);
