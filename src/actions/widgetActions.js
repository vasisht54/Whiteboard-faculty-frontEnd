export const FIND_WIDGETS_FOR_TOPIC = 'FIND_WIDGETS_FOR_TOPIC';
export const findWidgetsForTopic = widgets => (
    {
        type: FIND_WIDGETS_FOR_TOPIC,
        widgets
    }
);