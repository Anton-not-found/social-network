export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type UserType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
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
    isFetching: true,
    followingInProgress: []
}

export const UserReducer = (state: UsersType = initialState, action: UsersTsarType): UsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ?
                    {...el, followed: true} : el)
            }
        case 'UN-FOLLOW':
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ?
                    {...el, followed: false} : el)
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
                ...state, totalUsersCount: (action.payload.totalCount) / 300     // делится, чтобы отображалось меньше страниц
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.payload.isFetching
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id=> id !== action.payload.userId)
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
    | ToggleFollowingProgressACType

type Follow = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId,
        }
    } as const
}

type UnFollow = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
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
export const toggleIsFetchingtAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

type ToggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgressAC>
export const toggleFollowingProgressAC = (userId: number, isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {
            userId,
            isFetching
        }
    } as const
}


