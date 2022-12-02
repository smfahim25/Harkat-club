import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import styles from "../CSS/NewsFeed.module.css"
const NewsFeed = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    // console.log(posts);
    return (
        <div className={`${styles.keep_scrolling} overflow-y-auto h-[720px] p-10`}>
            {
                posts.slice(1, 100).map(post => <Feed key={post.id} post={post}></Feed>)
            }
        </div>
    );
};

export default NewsFeed;