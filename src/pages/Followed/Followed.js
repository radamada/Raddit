import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { PostsContext } from '../../contexts/PostsContextProvider';
import { getPostByTopicIdAndPostId } from '../../data/posts';
import PostCard from '../components/PostCard/PostCard';
import './Followed.css';

export default function Followed() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const { followedPosts } = useContext(PostsContext);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const posts = [...followedPosts].reverse();
        posts.forEach((post) => {
            post.data = getPostByTopicIdAndPostId(
                post.topicId,
                post.postId
            );
        });

        setPosts(posts);
    }, [followedPosts]);

    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/login');
        }
    }, []);

    return <>
        <div 
            className='followed-posts-container'
            style={{height: posts.length > 1 ? "fit-content" : "100vh"}}
        >
            {posts.length > 0 ? (
                <div className='followed-data'>
                    <h2 className='followed-data-title'>Followed</h2>
                </div>
            ) : (
                <p className='no-followed-posts'>You didn't followed any posts yet.</p>
            )}
            <div className='followed-posts'> {
                posts.map((post, index) => {
                    return <PostCard key={index} post={post.data} topicId={post.topicId} />
                })
            }
                
            </div>
        </div>
    </>
}