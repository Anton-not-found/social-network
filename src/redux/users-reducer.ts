export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type UserType = {
    id: string
    photos: {
        small: string
        large: string
    }
    fallowed: boolean
    name: string
    status: string
    location: {
        city: string,
        country: string
    }
}

const initialState: UsersType = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const UserReducer = (state: UsersType = initialState, action: UsersTsarType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ?
                    {...el, fallowed: true} : el)
            }
        case 'UN-FOLLOW':
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ?
                    {...el, fallowed: false} : el)
            }
        case 'SET-USERS':
            return {
                ...state, users: action.payload.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.payload.pageNumber
            }
        case 'SET-TOTLA-USER-COUNT':
            return {
                ...state, totalUsersCount: (action.payload.totalCount)/150
            }
        default:
            return state
    }
}

export type UsersTsarType = ChangeFollow
    | ChangeUnFollow
    | SetUsersType
    | SetCurrentPageType
    | SetUsersTotalCountType


type ChangeFollow = ReturnType<typeof changeFollowAC>
export const changeFollowAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId,
        }
    } as const
}

type ChangeUnFollow = ReturnType<typeof changeUnFollowAC>
export const changeUnFollowAC = (userId: string) => {
    return {
        type: 'UN-FOLLOW',
        payload: {
            userId,
        }
    } as const
}

type SetUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            pageNumber
        }
    } as const
}

type SetUsersTotalCountType = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTLA-USER-COUNT',
        payload: {
            totalCount
        }
    } as const
}


