import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import taskType from '../../types/taskType';
import api from '../../service';

interface taskState {
    task: taskType;
}
const initialState: taskState = {
    task: {
        title: '',
        description: '',
        id: '',
        archived: false
    }
};

interface taskCreate {
    title: string;
    description: string;
    email: string;
}

export const taskCreateAsyncThunk = createAsyncThunk('task', async (newTask: taskCreate) => {
    const email = newTask.email;
    console.log(newTask);

    try {
        const response = await api.post(`/tasks/${email}`, {
            title: newTask.title,
            description: newTask.description
        });
        console.log(response);

        return response.data;
    } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        throw error;
    }
});

export const TaskSlice = createSlice({
    name: 'Task',
    initialState,
    extraReducers(builder) {
        builder.addCase(taskCreateAsyncThunk.fulfilled, (state, action) => {
            state.task.title = action.payload.title;
            state.task.description = action.payload.description;
        });
    },
    reducers: {}
    // TODO perguntar se o usuario quer sair mesmo da conta
    // TODO proibir o usuario de sair sem ser no logout
});

export default TaskSlice.reducer;
