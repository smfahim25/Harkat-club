import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetClubDataQuery } from '../../app/EndPoints/baseEndpoints';
import style from '../CSS/Home.module.css';
import MyclubLoading from '../isLoading/MyclubLoading';
import { setUser } from '../../app/Slices/UserSlice';
import { setMember } from '../../app/Slices/MembersSlice';
import { setAdmin } from '../../app/Slices/AdminSlice';
import RequestForm from './RequestForm';

const Home = ({ id }) => {
    const [clubMember, setClubMember] = useState(null);
    const [clubAdmin, setClubAdmin] = useState(false);
    const { data: club, isLoading } = useGetClubDataQuery(id);
    const allMembers = useSelector(state => state.members);
    const user = useSelector((state) => state.user.id);
    const admin = useSelector((state) => state.admin.value);
    const dispatch = useDispatch();
    if (clubMember == null) {
        if (allMembers && user) {
            const findMember = allMembers.find(member => member.id === user);
            if (findMember) {
                setClubMember(true);
            }
            else {
                setMember(false);
            }
        }
    }
    if (!user.id) {
        if (club?.club?.club_id?.user_id?.id) {
            dispatch(setUser(club.user));
            dispatch(setMember(club.all_members));
        }
    }
    if (admin == null) {
        if (club?.club?.club_id?.user_id?.id) {
            let adminValue = false;
            if (club.club.club_id.user_id.id === user) {
                adminValue = true;
            }
            dispatch(setAdmin(adminValue));
            setClubAdmin(true);
        }
    }
    return (
        <div>
            {
                isLoading ? <MyclubLoading /> : <section className={style.backroundHome}>
                    <div className='flex flex-col absolute mt-12'>
                        <div className='w-96 mt-16 ml-10 bg-accent rounded-[20px] text-center'>
                            <div className='flex flex-col text-gray-900'>
                                <div className="flex px-4 items-center pt-5 md:px-10 lg:px-10">
                                    <h1 className="text-5xl font-bold w-64 leading-none sm:text-4xl xl:max-w-md text-gray-900">{club?.club?.club_id?.club_name}</h1>
                                    <img alt="" src={`http://115.245.192.138${club?.club?.club_profile}`} className="object-cover w-20 h-20 rounded-full shadow" />
                                </div>
                                <div>
                                    <p className="mt-6 flex-col mb-8 text-lg sm:mb-12 xl:max-w-lg text-gray-900">{club?.club?.club_id?.club_bio.slice(0, 100)}..</p>
                                </div>
                            </div>
                        </div>
                        <div className='ml-10 mt-5 flex flex-col justify-center'>
                            <p className='text-xl text-white'>Active since mm month / members-count</p>
                            {
                                clubMember || clubAdmin ? <div className='bg-accent h-10 mt-3 rounded-[20px]'> <p className='text-xl text-black text-center py-1 font-semibold'>Joined</p> </div> :
                                    <label htmlFor='request-join' className='cursor-pointer primary-bg text-white text-xl text-center p-2 rounded-xl font-semibold'>Request to join</label>
                            }
                        </div>
                    </div>
                </section >
            }
            <RequestForm />
        </div >
    );
};

export default Home;