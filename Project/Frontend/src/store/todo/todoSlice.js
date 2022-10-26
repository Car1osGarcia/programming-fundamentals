import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

import { URL } from "../../config";

export const fetchCreateTodo = createAsyncThunk('todo/fetchCreateTodo', async(todo,thunkAPI) => {
    console.log('creando')
    const response= await axios.post(
        URL+'todo',
        todo,
        { withCredentials: true }
        
    ).then(data => thunkAPI.fulfillWithValue(data.data))
    .catch(error=>{
        console.log(error);
        if(error.request.status===401){
           return  thunkAPI.rejectWithValue(error.response.data)
        }
    });
    return response;
      
});

export const fetchReadTodos = createAsyncThunk('todo/fetchReadTodos', async(data={},thunkAPI) => {
    
    const response= await axios.get(
        URL+'todo',
        { withCredentials: true }
        
    ).then(data => thunkAPI.fulfillWithValue(data.data))
    .catch(error=>{
        console.log(error);
        if(error.request.status===401){
           return  thunkAPI.rejectWithValue(error.response.data)
        }
    });
    return response;
      
});

export const modifyAllTodos = (data) =>{
    return (dispatch)=>{
        
        let newData=data.map((item) => ({
            ...item,
            showDescription: false       
        }));

        dispatch(modifyTodos(newData));

    }
}

export const orderAllTodos = (data) =>{
    return (dispatch)=>{
        let tempData = [...data];
        let newData =  tempData.sort((t1, t2) => (t1.priority < t2.priority) ? 1 : (t1.priority > t2.priority) ? -1 : 0);
        dispatch(modifyTodos(newData));

    }
}

export const modifyCompletedTodo = (todos,idTodo) =>{
    return (dispatch)=>{
        console.log(idTodo)
        let newData=todos.map((todo) => {
            let newTodo={
                idTodos:todo.idTodos,
                idUser:todo.idUser,
                creationDate:todo.creationDate,
                editDate: todo.editDate,
                priority: todo.priority,
                title: todo.title,
                description: todo.description,
                state: todo.state,
                showDescription: todo.showDescription
            }

            if (todo.idTodos === idTodo) {
                
                newTodo.state = newTodo.state=== 1? 0: 1;
            }
            
            return newTodo;
          });

        dispatch(modifyCompleteTodo(newData));

    }
}

export const modifyEditTodo = (todos,newInfo,idTodo) =>{
    return (dispatch)=>{
        let newData=todos.map((todo) => {
            let newTodo={
                idTodos:todo.idTodos,
                idUser:todo.idUser,
                creationDate:todo.creationDate,
                editDate: todo.editDate,
                priority: todo.priority,
                title: todo.title,
                description: todo.description,
                state: todo.state,
                showDescription: todo.showDescription
            }

            if (todo.idTodos === idTodo) {
                
                newTodo.title = newInfo.title
                newTodo.description = newInfo.description
                newTodo.priority = newInfo.priority
            }
            
            return newTodo;
          });

        dispatch(modifyCompleteTodo(newData));

    }
}

export const modifyDeleteTodo = (todos,idTodo) =>{
    return (dispatch)=>{
        let newData=todos.filter(x=> x.idTodos !== idTodo )  

        dispatch(modifyCompleteTodo(newData));

    }
}

export const fetchDeleteTodo = createAsyncThunk('todo/fetchDeleteTodo', async(idTodo,thunkAPI) => {
    
    const response= await axios.delete(
        URL+'todo/'+idTodo,
        { withCredentials: true }
        
    ).then(data => thunkAPI.fulfillWithValue(data.data))
    .catch(error=>{
        //console.log(error);
        if(error.request.status===401){
           return  thunkAPI.rejectWithValue(error.response.data)
        }
    });
    return response;
      
});

export const fetchEditTodo = createAsyncThunk('todo/fetchEditTodo', async(todo,thunkAPI) => {
    //console.log('activo patch')
    const response= await axios.patch(
        URL+'todo/'+todo.idTodo,
        todo,
        { withCredentials: true }
        
    ).then(data => thunkAPI.fulfillWithValue(data.data))
    .catch(error=>{
        //console.log(error);
        if(error.request.status===401){
           return  thunkAPI.rejectWithValue(error.response.data)
        }
    });
    return response;
      
});



// export const modifyTodo = (data,thunkAPI) => {
//     data.map(todo=> todo.showDescription=false);
    
//     return data;
      
// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        loading: false,
        error: false,
        message: null,
        todosR: false,
        todos: [],
    },
    reducers: {
        addNewTodo: (state, action) => {
            state.todos.push(action.payload);
            state.isSaving = false;
        },
        modifyTodos:(state, action) => {
            state.todos=action.payload;
        },
        modifyDescriptionTodo:(state, action) => {
            state.todos=action.payload;
        },
        modifyCompleteTodo:(state, action) =>{
            state.todos = action.payload
        },
        clearTodos: (state, action) => {
            state.loading = false
            state.error= false
            state.message= null
            state.todosR= false
            state.todos= []
        },

    },
    // Thunks
    extraReducers(builder){
        builder.addCase(fetchCreateTodo.pending,(state,action)=>{
            state.loading = true
            state.error = false
            state.message = null
        })

        builder.addCase(fetchCreateTodo.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.todos = [...state.todos, action.payload.newTodo]
            state.message=action.payload.msg
        })

        builder.addCase(fetchCreateTodo.rejected,(state,action)=>{
            state.loading = false
            state.error = true
            state.logged = false
            state.message = action.payload?.msg
            
        })
        builder.addCase(fetchReadTodos.pending,(state,action)=>{
            state.loading = true
            state.error = false
            state.message = null
        })

        builder.addCase(fetchReadTodos.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
            state.todos = action.payload?.todos
            state.todosR= true
        })

        builder.addCase(fetchReadTodos.rejected,(state,action)=>{
            state.loading = false
            state.logged = false
            state.error = true
            state.message = action.payload?.msg            
        })
        builder.addCase(fetchDeleteTodo.pending,(state,action)=>{
            state.loading = true
            state.error = false
            state.message = null
        })

        builder.addCase(fetchDeleteTodo.fulfilled,(state,action)=>{
            state.loading = false
            state.logged = true
            state.error = false
        })

        builder.addCase(fetchDeleteTodo.rejected,(state,action)=>{
            state.loading = false
            state.logged = false
            state.error = true
            state.message = action.payload?.msg            
        })

    }
});


// Action creators are generated for each case reducer function
//export const { login, logout, checkingCredentials } = authSlice.actions;

export default todoSlice.reducer
export const { modifyTodos, modifyDescriptionTodo, modifyCompleteTodo, clearTodos} = todoSlice.actions;