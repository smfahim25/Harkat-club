import React, { useState } from 'react';
import CreateEvent from './CreateEvent';
import FutureActivity from './FutureActivity';
import PastActivity from './PastActivity';
import ProposedActivity from './ProposedActivity';

const Activities = () => {
    const [proposedActivities, setProposedActivities] = useState(true);
    const [futureActivities, setFutureActivities] = useState(false);
    const [pastActivities, setPastActivities] = useState(false);
    const proposedActivitiesClick = () => {
        setProposedActivities(!proposedActivities);
        setFutureActivities(false);
        setPastActivities(false);
    }
    const futureActivitiesClick = () => {
        setFutureActivities(!futureActivities);
        setProposedActivities(false);
        setPastActivities(false);
    }
    const pastActivitiesClick = () => {
        setPastActivities(!pastActivities);
        setFutureActivities(false);
        setProposedActivities(false);
    }
    return (
        <div>
            <div className='flex justify-between items-center mt-10 text-xl px-5'>
                <h1 onClick={proposedActivitiesClick} className={proposedActivities ? 'w-58 p-2 cursor-pointer rounded-md text-center bg-[#ee3c4d] font-semibold text-white' : 'w-58 bg-accent p-2 cursor-pointer rounded-md text-center'}>Proposed Activities</h1>
                <h1 onClick={futureActivitiesClick} className={futureActivities ? 'w-52 p-2 cursor-pointer rounded-md text-center bg-[#ee3c4d] font-semibold text-white' : 'w-48 bg-accent p-2 cursor-pointer rounded-md text-center'}>Future Activities</h1>
                <h1 onClick={pastActivitiesClick} className={pastActivities ? 'w-48 p-2 cursor-pointer rounded-md text-center bg-[#ee3c4d] font-semibold text-white' : 'w-48 bg-accent p-2 cursor-pointer rounded-md text-center'}>Past Activities</h1>
            </div>
            {proposedActivities && <div className='mt-5 flex flex-col justify-center items-center'>
                <ProposedActivity />
                <div className='mt-10'><label htmlFor='create-event' className='bg-[#ee3c4d] cursor-pointer text-white p-2 rounded-xl font-semibold'>Create Event</label></div>
            </div>}
            {
                futureActivities && <div className='mt-5 px-10 flex justify-center items-center'><FutureActivity /></div>
            }
            {
                pastActivities && <div className='mt-5 px-10 flex justify-center items-center'><PastActivity /></div>
            }
            <CreateEvent />
        </div>
    );
};

export default Activities;