import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
    name: "members",
    initialState: [],
    reducers: {
        setMember(state, action) {
            state = action.payload;
        }
    }
})

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;