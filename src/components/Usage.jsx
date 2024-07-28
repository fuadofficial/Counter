const TYPE = {
    CHANGE_NUMBER: "change-number",
    CHANGE_COLOR: "change-color",
};

const UsageReducer = (state, action) => {
    switch (action.type) {
        case TYPE.CHANGE_NUMBER:
            return {
                ...state,
                number: state.number + action.payload
            };
        case TYPE.CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            };
        default:
            return state;
    }
};

export default UsageReducer;
export { TYPE };
