import React, { useState } from 'react';
import Feed from './Feed';
import styles from "../CSS/NewsFeed.module.css"
import { useGetClubImagesQuery } from '../../app/EndPoints/baseEndpoints';
import { useParams } from 'react-router';
import FeedLoader from '../isLoading/FeedLoader';
const NewsFeed = () => {
    // const [pageNumber, setPageNumber] = useState(1);
    // const increasePageNumber = () => {
    //     if (window.scrollY >= 500) {
    //         setPageNumber(pageNumber + 1);
    //     }
    //     else {
    //         setPageNumber(pageNumber);
    //     }
    // }
    // console.log(window.scrollY);
    // window.addEventListener('scroll', increasePageNumber);
    const { id } = useParams();
    const page_number = 1;
    const { data: club_images, isLoading } = useGetClubImagesQuery({ id, page_number });
    // const posts = [club_images];
    // posts.push(club_images);
    // console.log(club_images?.results);
    return (
        <div className={`${styles.keep_scrolling} overflow-y-auto h-screen px-10 mt-10`}>
            {
                isLoading ? <div className='flex justify-center items-center'><FeedLoader /></div> : club_images?.results?.map(club_image => <Feed key={club_image.HarkatImages_id
                } post={club_image}></Feed>)
            }
        </div>
    );
};

export default NewsFeed;