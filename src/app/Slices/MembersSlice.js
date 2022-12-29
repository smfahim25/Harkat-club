import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
    name: "members",
    initialState: { value: [] },
    reducers: {
        setMember(state, action) {
            state.value = action.payload;
        }
    }
})

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;