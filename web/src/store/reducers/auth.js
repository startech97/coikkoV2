const initialState = {
    formControl: {
        code_ou: {
            value: ''
        },
        password: {
            value: ''
        }
    }
}

export default function authReducer(state=initialState, action) {
    
    switch(action.type) {
        default:
            return state
    }
}