import { userConstants } from '../constants';

const initialState = {
    isFetching: false,
    isLoggedIn: false,
    _id: '',
    email: '',
    password: '',
    token: '',
    tel: '',
    name: '',
    studentid: '',
    username: '',
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLoggedIn: false,
                isFetching: true,
                ...action.payload,
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isFetching: false,
                ...action.payload,
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isFetching: false,
                ...action.payload,
            };
        case userConstants.LOGOUT:
            return {
                isFetching: false,
                isLoggedIn: false,
                _id: '',
                email: state.email,
                password: '',
                token: '',
                tel: '',
                name: '',
                studentid: '',
                username: '',
            };
        case userConstants.UPDATE_INFO:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
