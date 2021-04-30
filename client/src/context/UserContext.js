import React, { createContext } from 'react'

export const UserContext = createContext()

const initialState = {
    user : {
        name : "",
        email : "",
        country : "",
        dateOfBirth : ""
    },
    token : null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state
            }
        case 'LOGIN_USER':
            return {
                ...state
            }
        case 'UPDATE_USER':
            return {
                ...state
            }
        default:
            return state;
    }
}

const UserProviderContext = props => {

    return (
        <UserContext.Provider>
            { props.children}
        </UserContext.Provider>
    )
}

export default UserProviderContext
