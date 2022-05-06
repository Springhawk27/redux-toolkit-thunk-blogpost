import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Sajjad Mahmud' },
    { id: '1', name: 'Amir Khan ' },
    { id: '2', name: 'Salman Khan' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})


export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;