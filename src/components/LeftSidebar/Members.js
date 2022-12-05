import React, { useEffect, useState } from 'react';
import AllMembers from '../Members/AllMembers';
import NewRequests from '../Members/NewRequests';

const Members = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch("http://115.246.78.132/harkat/club-api/383b25d4-e655-4911-9cef-4858837dff4b")
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    console.log(members?.all_members);
    return (
        <div>
            <div>
                <h1 className='text-center bg-accent p-3 rounded-full text-xl font-extrabold'>All Members</h1>
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
        </div>
    );
};

export default Members;