const widgets = [
    {id: "123", title: "Widget 1"},
    {id: "234", title: "Widget 2"},
    {id: "345", title: "Widget 3"},
];

const widgetReducer = (state = {widgets: widgets}, action) => {
    switch(action.type) {

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            };

        default: return state;
    }
};

export default widgetReducer;