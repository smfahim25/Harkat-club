import React, { useEffect, useState } from 'react';
import MyClub from './MyClub';

const MyClubs = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        fetch("http://115.246.78.132/harkat/api/v1/Clubs/?page=1")
            .then(res => res.json())
            .then(data => setClubs(data))
    }, [])
    console.log(clubs);
    return (
        <div>
            <div className='p-10 grid grid-cols-3 gap-10 lg:justify-items-stretch 2xl:justify-items-center'>
                {
                    clubs ? clubs?.results?.map(club => <MyClub key={club.profile_id} club={club}></MyClub>) : <h1>loading</h1>
                }
            </div>
        </div>
    );
};

export default MyClubs;