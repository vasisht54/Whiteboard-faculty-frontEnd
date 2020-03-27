const lessonReducer = (state, action) => {
    return {
        lessons: [
            {title: "Lesson 1", _id: "123"},
            {title: "Lesson 2", _id: "234"},
            {title: "Lesson 3", _id: "345"},
            {title: "Lesson 4", _id: "456"}
        ]
    }
};

export default lessonReducer