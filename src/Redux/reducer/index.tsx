import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    timeActive: false
}

const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers:{
        setUser : (state,action) => {state.user = action.payload },
        setTimeActive: (state,action) => {state.timeActive = action.payload}
    }
})

export const {setUser,setTimeActive} = mySlice.actions
export default mySlice.reducer
