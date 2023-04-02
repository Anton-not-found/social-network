import {DispatchTsarType, PostType, ProfilePageType} from "./state";
import {v1} from "uuid";

type ProfileStateType = ProfilePageType
export const ProfileReducer = (state: ProfileStateType, action: DispatchTsarType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: '0'
            };
            state.posts.push(newPost);
            state.messageForNewPost = ''
            return state

        case 'CHANGE-NEW-TEXT':
            state.messageForNewPost = action.newText
            return state

        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText
    } as const
}


