import {v1} from "uuid";


export type ProfileType = {
    userId: number
    fullName: string
    aboutMe: string
    photos: ProfilePhotosType
    lookingForAJob: boolean
}

type ProfilePhotosType = {
    small: string
    large: string
}
type ProfileStateType = ProfilePageType

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
    profile: any
}
export type PostType = {
    id: string
    message: string
    likesCount: string
}

const initialState: ProfileStateType = {
    posts: [
        {id: v1(), message: 'Hi! How are you man?', likesCount: '3'},
        {id: v1(), message: 'It\'s my first post))', likesCount: '6'},
        {id: v1(), message: 'let\'s do it', likesCount: '15'},
        {id: v1(), message: 'Are you sure?', likesCount: '4'}
    ] as Array<PostType>,
    messageForNewPost: '',
    profile: null
}

export const ProfileReducer = (state: ProfileStateType = initialState, action: PropfileTsarType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: '0'
            };
            state.messageForNewPost = ''
            return {
                ...state, posts: [newPost, ...state.posts]
            }

        case 'CHANGE-NEW-TEXT':
            state.messageForNewPost = action.newText
            return {...state}

        case 'SET-USER-PROFILE':
            return {
                ...state, profile: action.payload.profile
            }

        default:
            return state
    }
}

export type PropfileTsarType = AddPostACType | ChangeNewTextACType | SetUserProfileACType

type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

type ChangeNewTextACType = ReturnType<typeof changeNewTextAC>
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText
    } as const
}

type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
}

