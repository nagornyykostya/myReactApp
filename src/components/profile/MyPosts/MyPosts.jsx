import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts'

const MyPosts = () => {
        return <div>

    <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
        <Posts />
        <Posts />
        <Posts />
        
    </div>


    </div>  
};
export default MyPosts;
