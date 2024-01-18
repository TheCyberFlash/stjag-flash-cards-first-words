const initialState = {
    selectedCategory: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;