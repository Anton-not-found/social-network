export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostType ={
    id: number
    message: string
    likesCount: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages:Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you man?', likesCount: '0'},
            {id: 2, message: 'It is my first post))', likesCount: '6'},
            {id: 3, message: 'let\'s do it', likesCount: '15'},
            {id: 4, message: 'Are you sure?', likesCount: '4'}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Elena'},
            {id: 3, name: 'Stepan'},
            {id: 4, name: 'Mariya'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'What are you learn?'},
            {id: 4, message: 'Oh my!'}
        ]
    }
}

