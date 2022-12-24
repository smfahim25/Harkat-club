import React from 'react';
import Feed from './Feed';
import styles from "../CSS/NewsFeed.module.css"
import { useGetClubImagesQuery, useGetClubVideosQuery } from '../../app/EndPoints/baseEndpoints';
import { useParams } from 'react-router';
import FeedLoader from '../isLoading/FeedLoader';
const NewsFeed = () => {
    const { id } = useParams();
    const page_number = 1;
    const { data: club_images, isLoading } = useGetClubImagesQuery({ id, page_number });
    const { data: videos } = useGetClubVideosQuery({ id, page_number });
    return (
        <div className={`${styles.keep_scrolling} h-[720px] px-10 mt-10`}>
            {
                isLoading ? <div className='flex justify-center items-center'><FeedLoader /></div> : club_images?.results?.map(club_image => <Feed key={club_image.HarkatImages_id
                } post={club_image}></Feed>)
            }
            {
                isLoading ? <div className='flex justify-center items-center'><FeedLoader /></div> : videos?.results?.map(video => <Feed key={video.HarkatVideos_id
                } post={video}></Feed>)
            }
        </div>
    );
};

export default NewsFeed;