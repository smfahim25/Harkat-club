import React from 'react';
import { useParams } from 'react-router';
import { useGetClubDataQuery } from '../../app/EndPoints/baseEndpoints';
import MyclubLoading from '../isLoading/MyclubLoading';
import AllMembers from '../Members/AllMembers';
import NewRequests from '../Members/NewRequests';

const Members = () => {
    const { id } = useParams();
    const { data: members, isLoading } = useGetClubDataQuery(id);
    console.log(members);
    return (
        <div>
            <div>
                <h1 className='text-center bg-accent p-3 rounded-full text-xl font-extrabold'>All Members</h1>
                {
                    isLoading ? <MyclubLoading /> : <div>
                        <div>
                            <h1 className='mt-4 pl-4 bg-accent p-2 rounded-full text-lg font-semibold'>New Requests</h1>
                            <NewRequests />
                        </div>
                        <div>
                            <h1 className='mt-5 pl-4 bg-accent p-2 rounded-full text-lg font-semibold'>Members</h1>
                            {
                                members?.all_members?.map(member => <AllMembers key={member.Club_id} member={member}></AllMembers>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Members;