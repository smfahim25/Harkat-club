import React from 'react';
import { useGetHatkatDataQuery } from '../../app/EndPoints/baseEndpoints';
import MyclubLoading from '../isLoading/MyclubLoading';
import MyClub from './MyClub';

const MyClubs = () => {
    const { data: clubs, isLoading } = useGetHatkatDataQuery();
    console.log(clubs);
    return (
        <div>
            {
                isLoading ? <MyclubLoading /> : <div className='p-10 grid grid-cols-3 gap-10 lg:justify-items-stretch 2xl:justify-items-center'>
                    {
                        clubs?.results?.map(club => <MyClub key={club.profile_id} club={club}></MyClub>)
                    }
                </div>
            }
        </div>
    );
};

export default MyClubs;