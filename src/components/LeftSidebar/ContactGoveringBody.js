import React from 'react';
import ClubAdmins from '../GoverningBody/ClubAdmins';
import ClubModerators from '../GoverningBody/ClubModerators';

const ContactGoveringBody = () => {
    return (
        <div className='mt-10 px-3'>
            <div className='pl-4 bg-accent p-2 rounded-xl text-lg font-semibold text-center'>
                <h1>Club Admins</h1>
            </div>
            <ClubAdmins />
            <div className='pl-4 bg-accent p-2 rounded-xl text-lg font-semibold text-center'>
                <h1>Club Moderators</h1>
            </div>
            <ClubModerators />
        </div>
    );
};

export default ContactGoveringBody;