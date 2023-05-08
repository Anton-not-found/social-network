export type UserAuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    // isFetching: boolean
}

const initialState: UserAuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
    // isFetching: true
}

export const AuthReducer = (state: UserAuthType = initialState, action: UsersTsarType): UserAuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':

            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }

        //
        // case 'TOGGLE-IS-FETCHING':
        //     return {
        //         ...state, isFetching: action.payload.isFetching
        //     }
        default:
            return state
    }
}

type UsersTsarType = | SetUserDataType


type SetUserDataType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (id: number | null, login: string | null, email: string | null) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            data: {
                id,
                login,
                email
            }
        }
    } as const
}


// type ToggleIsFetchingtACType = ReturnType<typeof toggleIsFetchingtAC>
// export const toggleIsFetchingtAC = (isFetching: boolean) => {
//     return {
//         type: 'TOGGLE-IS-FETCHING',
//         payload: {
//             isFetching
//         }
//     } as const
// }



