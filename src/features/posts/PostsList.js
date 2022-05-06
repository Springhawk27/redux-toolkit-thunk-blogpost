import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
//new 1
import PostAuthor from './PostAuthor';
// new 2
import TimeAgo from './TimeAgo';

const PostsList = () => {
    // const posts = useSelector(state => state.posts);
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            {/* new 1 */}
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>


        </article>
    ))
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostsList;