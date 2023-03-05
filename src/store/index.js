import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import thunk from "redux-thunk";
import trackReducer from '../features/tracks/trackSlice'

const reducers = combineReducers({
    tracks: trackReducer
})

const persistconfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistconfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

let persistor = persistStore(store)

export {persistor};