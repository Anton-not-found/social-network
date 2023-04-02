import {v1} from "uuid";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";


export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: DispatchTsarType) => void
}

export type DispatchTsarType = AddPostActionType | ChangeNewText | ChangeNewMessageText | SendMessage

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type ChangeNewText = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type ChangeNewMessageText = {
    type: 'CHANGE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessage = {
    type: 'SEND-MESSAGE'
}


export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type PostType = {
    id: string
    message: string
    likesCount: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    messageForNewPost: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type SidebarPageType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi! How are you man?', likesCount: '3'},
                {id: v1(), message: 'It\'s my first post))', likesCount: '6'},
                {id: v1(), message: 'let\'s do it', likesCount: '15'},
                {id: v1(), message: 'Are you sure?', likesCount: '4'}
            ],
            messageForNewPost: ''
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Anton'},
                {id: v1(), name: 'Elena'},
                {id: v1(), name: 'Stepan'},
                {id: v1(), name: 'Mariya'},

            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'What are you learn?'},
                {id: v1(), message: 'Oh my!'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed BLA BLA')
    },

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = SidebarReducer(this._state.sidebar, action)
        this._callSubscriber();

    }
}


