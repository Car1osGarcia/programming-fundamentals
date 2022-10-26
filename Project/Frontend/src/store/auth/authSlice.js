import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

import { URL } from "../../config";
axios.defaults.withCredentials = true;

// Generates pending, fulfilled and rejected action types
export const fetchLogin = createAsyncThunk('auth/fetchLogin', async(credentials,thunkAPI) => {
    
    const response= await axios.post(
        URL+'auth',
        {email:credentials.email, password: credentials.password},
        { withCredentials: true }
    ).then(data => thunkAPI.fulfillWithValue(data.data))
    .catch(error=>{
        return thunkAPI.rejectWithValue(error.response.data)}
    )
    return response;
      
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async(credentials,thunkAPI) => {
    
    const response= await axios.post(
        URL+'auth/new',
        credentials,
        { withCredentials: true }
    ).then(data => thunkAPI.fulfillWithValue(data.data))
    .catch(error=>{
        return thunkAPI.rejectWithValue(error.response.data)}
    )
    return response;
      
});

export const fetchLogout = createAsyncThunk('auth/fetchLogout', async(data={},thunkAPI) => {
    
    const response= await axios.get(
        URL+'/auth',
        { withCredentials: true }
    ).then(data => thunkAPI.fulfillWithValue(data.data))
    .catch(error=>{
        return thunkAPI.rejectWithValue(error.response.data)}
    )
    return response;
      
});

export const fetchRevalidate = createAsyncThunk('auth/fetchRevalidate', async(cre={},thunkAPI) => {
    
    const response= await axios.post(
        URL+'auth/renew',
        {},
        { withCredentials: true }
        
    ).then(data => thunkAPI.fulfillWithValue(data.data))
    .catch(error=>{
        if(error.request.status===401){
           return  thunkAPI.rejectWithValue(error.response.data)
        }
    });
    return response;
      
});

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        logged: false,
        error: false,
        message: null,
        displayName: null,
    },
    reducers: {
        clearLogOut: (state, action) => {
            state.loading = false
            state.logged= false
            state.error= false
            state.message= null
            state.displayName= null
        },
        login:(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.displayName = action.payload?.name
        }
    },
    // Thunks
    extraReducers(builder){
        builder.addCase(fetchLogin.pending,(state,action)=>{
            state.loading = true
            state.error = false
            state.message = null
            state.displayName =null
        })

        builder.addCase(fetchLogin.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.displayName = action.payload?.name
        })

        builder.addCase(fetchLogin.rejected,(state,action)=>{
            state.loading = false
            state.error = true
            state.displayName = null
            state.logged = false
            state.message = action.payload?.msg
            
        })
        builder.addCase(fetchRegister.pending,(state,action)=>{
            state.loading = true
            state.error = false
            state.message = null
            state.displayName =null
        })

        builder.addCase(fetchRegister.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.displayName = action.payload?.name
        })

        builder.addCase(fetchRegister.rejected,(state,action)=>{
            state.loading = false
            state.error = true
            state.displayName = null
            state.logged = false
            state.message = action.payload?.msg
            
        })
        builder.addCase(fetchRevalidate.pending,(state,action)=>{
            state.loading = true
            state.error = false
            state.message = null
            state.displayName =null
        })

        builder.addCase(fetchRevalidate.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.displayName = action.payload?.name
        })

        builder.addCase(fetchRevalidate.rejected,(state,action)=>{
            state.loading = false
            state.logged = false
            state.error = true
            state.displayName = null
            state.message = action.payload?.msg            
        })

    }
});


// Action creators are generated for each case reducer function
//export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer
export const {clearLogOut } = authSlice.actions;