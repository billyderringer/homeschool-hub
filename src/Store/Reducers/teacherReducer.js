const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    teacherId: '',
    isLoggedIn: false,
    openLogin: false,
    openRegister: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_TEACHER':
            return {
                firstName: action.firstName,
                lastName: action.lastName,
                userName: action.userName,
                password: action.password,
                teacherId: action.teacherId,
                isLoggedIn: true
            }
        case 'SET_TEACHER_ID':
            return {
                ...state,
                teacherId: action.teacherId
            }
        case 'OPEN_REGISTER':
            return {
                ...state,
                openRegister: true
            }
        case 'CLOSE_REGISTER':
            return {
                ...state,
                openRegister: false
            }
        case 'OPEN_LOGIN':
            return {
                ...state,
                openLogin: true
            }
        case 'CLOSE_LOGIN':
            return {
                ...state,
                openLogin: false
            }
        default:
            return state
    }
}

export default reducer