
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './redux'; 

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});

export default store;
