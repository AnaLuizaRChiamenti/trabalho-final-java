import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import userType from '../../types/userType';
import api from '../../service';

interface userstate {
    user: userType;
}
const initialState: userstate = {
    user: { email: '', password: '', tasks: [] }
};

interface userLogin {
    email: string;
    password: string;
}

interface userCreate {
    email: string;
    password: string;
    repassword: string;
}

interface taskCreate {
    title: string;
    description: string;
    email: string;
}

export const userLoginAsyncThunk = createAsyncThunk('login', async ({ email, password }: userLogin) => {
    const response = await api.post('/login', {
        email,
        password
    });
    console.log(response);
    return response.data;
});

export const userCreateAsyncThunk = createAsyncThunk(
    'userCreate',
    async ({ email, password, repassword }: userCreate) => {
        const response = await api.post('/users', {
            email,
            password,
            repassword
        });
        console.log(response);

        return response.data;
    }
);

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

export const userSlice = createSlice({
    name: 'User',
    initialState,
    extraReducers(builder) {
        builder.addCase(userLoginAsyncThunk.fulfilled, (state, action) => {
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
        });
        builder.addCase(taskCreateAsyncThunk.fulfilled, (state, action) => {
            state.user.tasks.push(action.payload);
        });
    },
    reducers: {
        logout: () => {
            return initialState;
        }
    }
});

export default userSlice.reducer;

export const { logout } = userSlice.actions;
