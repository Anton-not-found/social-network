import {combineReducers, legacy_createStore as createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";



export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer
});




export const store = createStore(rootReducer);
