import { createSlice } from "@reduxjs/toolkit"
import { adminLogin, google, login, register, signOut, toggleTheme, updateUser } from "./userAction"

// user slice 
const initialState = {
    user: null,
    isAuth: false,
    loading: false,
    error: null

}
// user reducer 
const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.loading = true
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;

            })
            .addCase(adminLogin.pending, (state, action) => {
                state.loading = true
                state.error = null;
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;

            })
            .addCase(register.pending, (state, action) => {
                state.loading = true
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;

            })
            .addCase(google.pending, (state, action) => {
                state.loading = true
                state.error = null;
            })
            .addCase(google.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(google.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;


            })
            .addCase(toggleTheme.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(toggleTheme.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;


            })
            .addCase(updateUser.pending, (state, action) => {
                state.loading = true;

                state.error = null;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;


            })
            .addCase(signOut.pending, (state, action) => {
                state.loading = true;

                state.error = null;
            })
            .addCase(signOut.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = false;
                state.user = null,
                    state.error = null;
            })
            .addCase(signOut.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;


            })
    }



})


export default userReducer.reducer