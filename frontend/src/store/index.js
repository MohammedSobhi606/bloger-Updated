import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../store/slices/user/userSlice.js"; // Your user slice here
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { apiSlice } from "./slices/queries.js";
import { setupListeners } from "@reduxjs/toolkit/query";
// redux persistence

const userpersist = {
    key: "user",
    storage,
    whitelist: ['user',]

};



const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
        , user: persistReducer(userpersist, userReducer),

    },
    middleware: (getDefaultMiddleware) =>

        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiSlice.middleware),
    // Define your reducers here
});

const persistor = persistStore(store);

export { store, persistor };
