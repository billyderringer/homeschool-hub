import constants from './constants'

const actions = {
    registerTeacher:(teacher) => {
        return {type: constants.REGISTER_TEACHER, teacher}
    },
    setTeacherId:(teacherId) => {
        return {type: constants.GET_TEACHER_ID, teacherId}
    },
    openRegister:() => {
        return {type: constants.OPEN_REGISTER}
    },
    closeRegister:() => {
        return {type: constants.CLOSE_REGISTER}
    },
    openLogin:() => {
        return {type: constants.OPEN_LOGIN}
    },
    closeLogin:() => {
        return {type: constants.CLOSE_LOGIN}
    }
}

export default actions