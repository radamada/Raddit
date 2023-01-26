import './PostCard.css';
import { faThumbsUp, faThumbsDown , faHeart , faComment, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContextProvider';
import { PostsContext } from '../../../contexts/PostsContextProvider';

export default function PostCard( { topicId, post } ) {
    const { isAuthenticated } = useContext(AuthContext);
    const { 
        isPostFollowed,
        isPostLiked,
        isPostDisliked,
        addPostToFollowed,
        addPostToLiked,
        addPostToDisliked,
        followedPosts,
        likedPosts,
        dislikedPosts
    } = useContext(PostsContext);

    const [isFollowed, setIsFollowed] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    useEffect(() =>{
        setIsFollowed(isPostFollowed({ topicId, postId: post.id }));
        setIsLiked(isPostLiked({ topicId, postId: post.id }));
        setIsDisliked(isPostDisliked({ topicId, postId: post.id }));
    }, [followedPosts, likedPosts, dislikedPosts]);

    return (
        <div className="post-card">
            <div className='details-wrapper'>
                <p className="post-user-since">Posted by u/{post.username} {post.since}</p>
                <h3 className='post-description'>{post.description}</h3>
            </div>
            <Link to={`/topic/${topicId}/post/${post.id}`}>
                <img className="image" src={post.link} />
            </Link>
            <div className="buttons">
                {isAuthenticated && (
                    <>
                        <button
                            className="like"
                            onClick={() => addPostToLiked({ topicId, postId: post.id })}
                            style= {{backgroundColor: isLiked ? "red" : "orange"}}
                        >
                            <FontAwesomeIcon icon={faThumbsUp} /> Like
                        </button>
                        <button
                            className="dislike"
                            onClick={() => addPostToDisliked({ topicId, postId: post.id })}
                            style= {{backgroundColor: isDisliked ? "red" : "orange"}}
                        >
                            <FontAwesomeIcon icon={faThumbsDown} /> Dislike
                        </button>
                        <button 
                            className="follow"
                            onClick={() => addPostToFollowed({ topicId, postId: post.id })}
                            style= {{backgroundColor: isFollowed ? "red" : "orange"}}
                        >
                            <FontAwesomeIcon icon={isFollowed ? faHeartBroken: faHeart} /> Follow
                        </button>
                    </>
                )}
                <Link to={`/topic/${topicId}/post/${post.id}`}>
                    <button className="comments">
                        <FontAwesomeIcon icon={faComment} /> Comments
                    </button>
                </Link>
            </div>
        </div>
    );
}