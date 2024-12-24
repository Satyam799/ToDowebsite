import {createSlice} from '@reduxjs/toolkit'

type New=(string)[]

const initialState={
    All:[] as New,
    inprogress:[] as New,
    Done:[] as New
}

const Todoslice=createSlice({
    name:'Todo',
    initialState,
    reducers:{
        TodostateAll(state,action){
            state.All=[...state.All,action.payload]
            state.inprogress=[...state.inprogress,action.payload]

        },
        TodoListDone(state,action){
            state.Done=[...state.Done,action.payload]
            // state.All=state.All.filter((el)=>el!==action.payload)
             state.inprogress=state.inprogress.filter((el)=>el!==action.payload)
        }

    }
})

export const {TodostateAll,TodoListDone}=Todoslice.actions

export default Todoslice.reducer

