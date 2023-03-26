import {v1} from "uuid";


let rerenderEntireTree = ()=> {
    console.log('state changed BLA BLA')
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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export const state: RootStateType = {
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
        ]
    }
}

export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    rerenderEntireTree();
    console.log(newText)
}

export const addPost = () => {
    const newPost: PostType = {
        id: v1(),
        message: state.profilePage.messageForNewPost,
        likesCount: '0'
    }
    console.log(postMessage)
    state.profilePage.posts.push(newPost);
    state.profilePage.messageForNewPost = ''
    rerenderEntireTree();
}

export const subscriber = (observer:()=>void) => {
    rerenderEntireTree = observer;
}



