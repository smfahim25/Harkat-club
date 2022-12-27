import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { id: "", username: "", email: "" },
    reducers: {
        setUser(state, action) {
            state.id = action?.payload?.id;
            state.username = action?.payload?.username;
            state.email = action?.payload?.email;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;