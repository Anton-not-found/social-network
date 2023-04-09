import {combineReducers, legacy_createStore as createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UserReducer} from "./users-reducer";



export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UserReducer
});




export const store = createStore(rootReducer);

