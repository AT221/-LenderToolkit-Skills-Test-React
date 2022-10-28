import {combineReducers} from '@reduxjs/toolkit';

import TodoReducer from './TodoReducer';

const AllReducers = combineReducers({
    todoData: TodoReducer

})


export default AllReducers;