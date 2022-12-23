import React from 'react';
import { useParams } from 'react-router';
import { useGetClubVideosQuery } from '../../app/EndPoints/baseEndpoints';
import PicturesLoading from '../isLoading/PicturesLoading';
import Video from '../Video/Video';

const Videos = () => {
    const { id } = useParams();
    const page_number = 1;
    const { data: club_videos, isLoading } = useGetClubVideosQuery({ id, page_number })
    return (
        <div className='mt-10'>
            {isLoading ? <div className='flex flex-col justify-center items-center mt-40'><PicturesLoading /> </div> : <div className='grid grid-cols-2 gap-1'> {club_videos?.results?.map(club_video => <Video key={club_videos.HarkatVideos_id
            } post={club_video}></Video>)}</div>}
        </div>
    );
};

export default Videos;