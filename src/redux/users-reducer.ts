export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    currentPage: 1,
    isFetching: true
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
        case 'SET-TOTAL-USER-COUNT':
            return {
                ...state, totalUsersCount: (action.payload.totalCount) / 150
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.payload.isFetching
            }
        default:
            return state
    }
}

export type UsersTsarType = Follow
    | UnFollow
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingtACType

type Follow = ReturnType<typeof followAC>
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId,
        }
    } as const
}

type UnFollow = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: string) => {
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

type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        payload: {
            totalCount
        }
    } as const
}

type ToggleIsFetchingtACType = ReturnType<typeof toggleIsFetchingtAC>
export const toggleIsFetchingtAC = (isFetching:boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}



