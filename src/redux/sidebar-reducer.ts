
type SidebarStateType = SidebarPageType
type SidebarPageType = {

}
const initialState = {

}
export const SidebarReducer = (state:SidebarStateType = initialState, action:any):SidebarStateType => {
    switch (action.type) {
        case 'xxx':
            return state
        default:
            return state
    }
}

