import {SidebarPageType} from "./state";


type SidebarStateType = SidebarPageType
export const SidebarReducer = (state:SidebarStateType, action:any):SidebarStateType => {
    switch (action.type) {
        case 'xxx':
            return state
        default:
            return state
    }
}