import { configureStore } from '@reduxjs/toolkit';
import { chuckSlice } from './reducers';

export default configureStore({
    reducer: {
        chuck: chuckSlice.reducer
    }
});