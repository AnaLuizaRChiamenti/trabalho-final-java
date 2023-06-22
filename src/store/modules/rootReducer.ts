import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from './UserSlice';
import TaskSlice from './TaskSlice';


export default combineReducers({
    user: UserSlice,
    task: TaskSlice
});
