const initialState = {
    isAuthenticated: false,
    user: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.user || {}
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }
            default:
                return state;
    }
}

export default authReducer;