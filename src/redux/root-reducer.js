import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/authSlice";
import contactsReducer from "./contacts/contactsSlice";
import filtersReducer from "./filter/filtersSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filtersReducer,
})


export default rootReducer;
