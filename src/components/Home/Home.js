import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetClubDataQuery } from '../../app/EndPoints/baseEndpoints';
import style from '../CSS/Home.module.css';
import MyclubLoading from '../isLoading/MyclubLoading';
import { setUser } from '../../app/Slices/UserSlice';
import { setMember } from '../../app/Slices/MembersSlice';

const Home = ({ id }) => {
    const { data: club, isLoading } = useGetClubDataQuery(id);
    // const user = useSelector((state) => state.user.id);
    // const dispatch = useDispatch();
    // console.log(club, user);
    // if (!user.id) {
    //     dispatch(setUser(club.user));
    //     dispatch(setMember(club.all_members));
    // }
    return (
        <div>
            {
                isLoading ? <MyclubLoading /> : <section className={style.backroundHome}>
                    <div className='flex flex-col absolute mt-12'>
                        <div className='w-96 mt-16 ml-10 bg-accent rounded-[20px] text-center'>
                            <div className='flex flex-col text-gray-900'>
                                <div className="flex px-4 items-center pt-5 md:px-10 lg:px-10">
                                    <h1 className="text-5xl font-bold w-64 leading-none sm:text-4xl xl:max-w-md text-gray-900">{club?.club?.club_id?.club_name}</h1>
                                    <img alt="" src={`http://115.246.78.132${club?.club?.club_profile}`} className="object-cover w-20 h-20 rounded-full shadow" />
                                </div>
                                <div>
                                    <p className="mt-6 flex-col mb-8 text-lg sm:mb-12 xl:max-w-lg text-gray-900">{club?.club?.club_id?.club_bio}</p>
                                </div>
                            </div>
                        </div>
                        <div className='ml-10 mt-5'>
                            <p className='text-xl text-white'>Active since mm month / members-count</p>
                            <div className='bg-accent h-10 mt-3 rounded-[20px]'>
                                <p className='text-xl text-black pt-1 text-center'>Membership status</p>
                            </div>
                        </div>
                    </div>
                </section >
            }
        </div >
    );
};

export default Home;