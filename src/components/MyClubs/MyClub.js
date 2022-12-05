import React from 'react';

const MyClub = (props) => {
    const { club_id, club_profile } = props.club;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
                <figure className="h-[200px]">
                    <img src={club_profile} alt="club profile" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{club_id?.club_name}</h2>
                    <p>{club_id?.club_bio}</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClub;