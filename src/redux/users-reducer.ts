
export type UsersType = {
    users: Array<UserType>
}

export type UserType = {
    id: string
    photoUrl: string
    fallowed:boolean
    fullName:string
    status: string
    location: {
        city: string,
        country: string
    }
}

const initialState: UsersType = {
    users: [

    ] as Array<UserType>
}

export const UserReducer = (state: UsersType = initialState, action: UsersTsarType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ?
                    {...el, fallowed : true}  : el)
            }
        case 'UN-FOLLOW':
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ?
                    {...el, fallowed : false}  : el)
            }
        case 'SET-USERS':
            return {
                ...state, users: [...state.users, ...action.payload.users]
            }
        default:
            return state
    }
}

export type UsersTsarType = ChangeFollow | ChangeUnFollow | SetUsersType


type ChangeFollow = ReturnType<typeof changeFollowAC>
export const changeFollowAC = (userId:string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId,
        }
    } as const
}

type ChangeUnFollow = ReturnType<typeof changeUnFollowAC>
export const changeUnFollowAC = (userId:string) => {
    return {
        type: 'UN-FOLLOW',
        payload: {
            userId,
        }
    } as const
}

type SetUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users:Array<UserType>) => {
    return{
        type: 'SET-USERS',
        payload: {
            users
        }
    }as const
}

