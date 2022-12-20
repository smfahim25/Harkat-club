import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
    name: "admin",
    initialState: { value: null },
    reducers: {
        setAdmin(state, action) {
            state.value = action.payload;
        }
    }
})

export const { setAdmin } = AdminSlice.actions;
export default AdminSlice.reducer;