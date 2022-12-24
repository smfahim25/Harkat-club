import React from 'react';
import { Link } from 'react-router-dom';

const MyClub = (props) => {
    const { club_id, club_profile } = props.club;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl cursor-pointer p-5">
                <figure className="h-[200px]">
                    <img src={club_profile} alt="club profile" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{club_id?.club_name}</h2>
                    <p>{club_id?.club_bio}</p>
                </div>
                <div className='flex justify-between'>
                    <Link to={`/${club_id?.harkat_id}`} className="primary-bg font-semibold text-white rounded-md text-xl hover:text-white p-2">Open Club</Link>
                    <label className="primary-bg font-semibold text-white rounded-md text-xl hover:text-white p-2 cursor-pointer">Request to join</label>
                </div>
            </div>
        </div>
    );
};

export default MyClub;