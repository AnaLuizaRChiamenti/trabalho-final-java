import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userType from '../../types/userType';
import api from '../../service';

interface userState {
    user: userType;
}
const initialState: userState = {
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

export const userLoginAsyncThunk = createAsyncThunk('userLogin', async ({ email, password }: userLogin) => {
    const response = await api.post('/login', {
        email,
        password
    });
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
        return response.data;
    }
);

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    extraReducers(builder) {
        builder.addCase(userLoginAsyncThunk.fulfilled, (state, action) => {
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
        });
        builder.addCase(userCreateAsyncThunk.fulfilled, () => {
            alert('Conta criada!');
        });
    },
    reducers: {
        logout: () => {
            return initialState;
        }
    }
});

export default UserSlice.reducer;

export const { logout } = UserSlice.actions;
