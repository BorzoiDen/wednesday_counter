import {combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";


const reducers = combineReducers({
    counter: counterReducer
})

export const store = createStore(reducers);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store=store