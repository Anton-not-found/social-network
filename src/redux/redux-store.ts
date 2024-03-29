import {combineReducers, legacy_createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UserReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";



const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UserReducer,
    auth: AuthReducer
});

export const store = legacy_createStore(rootReducer);

export type AppRootState = ReturnType<typeof rootReducer>


