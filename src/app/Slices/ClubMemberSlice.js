import { createSlice } from "@reduxjs/toolkit";

export const ClubCurrentMemberSlice = createSlice({
    name: "clubcurrentmember",
    initialState: { member_club_id: "", member_status: "", member_id: "" },
    reducers: {
        setClubCurrentMember(state, action) {
            console.log(action.payload);
            // state.member_club_id = action.payload;
        }
    }
})

export const { setClubCurrentMember } = ClubCurrentMemberSlice.actions;
export default ClubCurrentMemberSlice.reducer;