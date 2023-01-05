import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import styles from "../CSS/NewsFeed.module.css"
import { useParams } from 'react-router';
import FeedLoader from '../isLoading/FeedLoader';
import { useGetClubMediaQuery } from '../../app/EndPoints/baseEndpoints';
const NewsFeed = () => {
    const { id } = useParams();
    const [page_number, setPage_number] = useState(1);
    const [posts, setPosts] = useState([]);
    const loadClick = () => {
        setPage_number(page_number + 1);
    }
    const { data: club_media, isLoading } = useGetClubMediaQuery({ id, page_number });
    useEffect(() => {
        setPosts(club_media);
    }, [club_media])
    console.log(posts);
    return (
        <div className={`${styles.keep_scrolling} h-[720px] px-10 mt-10`}>
            {
                isLoading ? <div className='flex justify-center items-center'><FeedLoader /></div> : posts?.results?.map(media => <Feed key={media.media_id
                } media={media}></Feed>)
            }
            {club_media?.results?.length === 15 ? <button onClick={loadClick} className='text-[#ee3c4d] text-lg font-semibold'>Load more..</button> : ''}
        </div>
    );
};

export default NewsFeed;