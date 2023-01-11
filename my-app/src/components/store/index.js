import userStore from './user'; 
import saylaniStore from './saylani';

import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer:{
        userStore,
        saylaniStore,
    },
});

export default store;