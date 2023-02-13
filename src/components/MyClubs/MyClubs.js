import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetClubMemberQuery, useGetHatkatDataQuery } from '../../app/EndPoints/HarkatClub';
import { removeAdmin } from '../../app/Slices/AdminSlice';
import { removeClubCurrentMember } from '../../app/Slices/ClubMemberSlice';
import { removeMember } from '../../app/Slices/MembersSlice';
import { setUser } from '../../app/Slices/UserSlice';
import MyclubLoading from '../isLoading/MyclubLoading';
import MyClub from './MyClub';

const MyClubs = () => {
    const { data: clubs, isLoading } = useGetHatkatDataQuery();
    const { data: member, isLoading: memberLoading } = useGetClubMemberQuery();
    const user = useSelector((state) => state.user.id);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user.id) {
            if (!memberLoading) {
                dispatch(setUser(member));
            }
        }
    }, [user, dispatch, memberLoading, member])
    dispatch(removeAdmin());
    dispatch(removeClubCurrentMember());
    dispatch(removeMember());
    // console.log(user);
    return (
        <div>
            {
                isLoading || memberLoading ? <MyclubLoading /> : <div className='p-10 grid grid-cols-3 gap-10 lg:justify-items-stretch 2xl:justify-items-center'>
                    {
                        clubs?.results?.map(club => <MyClub key={club.profile_id} club={club}></MyClub>)
                    }
                </div>
            }
        </div>
    );
};

export default MyClubs;