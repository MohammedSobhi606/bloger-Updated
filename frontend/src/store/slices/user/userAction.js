/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit'
import myaxios from '../../../myaxios'
export const login = createAsyncThunk('login', async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await myaxios.post('/user/login', formData)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
})
export const adminLogin = createAsyncThunk('adminLogin', async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await myaxios.post('/user/adminLogin', formData)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
})

export const register = createAsyncThunk('register', async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await myaxios.post('/user/register', formData)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
})
export const google = createAsyncThunk('google', async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await myaxios.post('/user/google', formData)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
})
export const toggleTheme = createAsyncThunk('toggleTheme', async (theme, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await myaxios.post('/user/toggleTheme', { theme })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
})
export const updateUser = createAsyncThunk('updateUser', async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await myaxios.post('/user/updateUser', formData)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
})
export const signOut = createAsyncThunk('signOut', async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        const res = await myaxios.post('/user/logout', formData)

    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message);
    }
})