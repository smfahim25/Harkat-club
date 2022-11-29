import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import styles from "../CSS/NewsFeed.module.css"
const NewsFeed = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    console.log(posts);
    return (
        <div className={`${styles.keep_scrolling} overflow-y-auto h-screen pr-16`}>
            {
                posts.slice(1).slice(5).map(post => <Feed key={post.id} post={post}></Feed>)
            }
        </div>
    );
};

export default NewsFeed;