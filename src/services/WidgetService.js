import {WIDGET_SERVICE_API_URL} from "../common/constants";

export const updateWidget = async (widgetId, widget) => {
    const response = await fetch(`${WIDGET_SERVICE_API_URL}/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteWidget = async (widgetId) => {
    const response = await fetch(`${WIDGET_SERVICE_API_URL}/widgets/${widgetId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const createWidget = async (topicId, widget) =>
{
    const response = await fetch(`${WIDGET_SERVICE_API_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const findWidgetsForTopic = async(topicId) => {
    const response = await fetch(`${WIDGET_SERVICE_API_URL}/topics/${topicId}/widgets`);
    return await response.json();
};

export const updateWidgetOrder = async(widgetId, widget, direction) => {
    const response = await fetch(`${WIDGET_SERVICE_API_URL}/widgets/${widgetId}/${direction}`, {
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        });
    return await response.json()
};

export default {
    findWidgetsForTopic,
    createWidget,
    deleteWidget,
    updateWidget,
    updateWidgetOrder
}
