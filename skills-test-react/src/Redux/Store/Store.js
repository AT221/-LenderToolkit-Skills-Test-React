import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import AllReducers from '../Reducers/AllReducers';

const store = configureStore(
 {reducer: AllReducers},
 applyMiddleware(logger)
);

export default store;