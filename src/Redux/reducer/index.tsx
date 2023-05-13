import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null
}

const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers:{
        setUser : (state,action) => {state.user = action.payload }
    }
})

export const {setUser} = mySlice.actions
export default mySlice.reducer
