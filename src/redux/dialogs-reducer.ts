import {v1} from "uuid";

type DialogsStateType = DialogsPageType
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
const initialState:DialogsStateType = {
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
}

export const DialogsReducer = (state: DialogsStateType = initialState, action: DialogsTsarType): DialogsStateType => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.messages.push({id: v1(), message: body});
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export type DialogsTsarType = ChangeNewMessageTextACType | SendMessageACType

type ChangeNewMessageTextACType = ReturnType<typeof changeNewMessageTextAC>
export const changeNewMessageTextAC = (body: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-BODY',
        body
    } as const
}

type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
