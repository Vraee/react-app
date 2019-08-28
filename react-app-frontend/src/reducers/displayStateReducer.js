const displayStateReducer = (state = 'NONE', action) => {
    switch (action.type) {
        case 'SET_DISPLAY':
            return action.data;
        default:
            return state;
    }
}

export const displayChange = display => {
    return {
        type: 'SET_DISPLAY',
        data: display
    };
};

export default displayStateReducer;