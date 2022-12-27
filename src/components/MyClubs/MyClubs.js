import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetClubMemberQuery, useGetHatkatDataQuery } from '../../app/EndPoints/baseEndpoints';
import { setUser } from '../../app/Slices/UserSlice';
import MyclubLoading from '../isLoading/MyclubLoading';
import MyClub from './MyClub';

const MyClubs = () => {
    const { data: clubs, isLoading } = useGetHatkatDataQuery();
    const { data: member, isLoading: memberLoading } = useGetClubMemberQuery();
    const user = useSelector((state) => state.user.id);
    const dispatch = useDispatch();
    if (!user.id) {
        if (!memberLoading) {
            dispatch(setUser(member));
        }
    }
    console.log(user);
    console.log(member);
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