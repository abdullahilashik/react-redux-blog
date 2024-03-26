import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk('users/fetch', async() => {
    try{
        const response = await axios.get(url);
        return [...response.data];
    }catch(error){
        return error.message;
    }
});

const initialState = {
    users: [],
    status: 'idle',
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers (builder){
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = 'failed';
            });
    }
})


export const selectAllUsers = (state) => state.users.users;
export const getUserStatus = (state) => state.users.status;
export const getuserError = (state) => state.users.error;
export default userSlice.reducer