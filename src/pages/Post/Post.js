import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { PostsContext } from '../../contexts/PostsContextProvider';
import { getPostByTopicIdAndPostId } from '../../data/posts';
import Comment from '../components/Comment/Comment';
import './Post.css';

export default function Post() {
    const { isAuthenticated } = useContext(AuthContext);
    const { 
        postsComments,
        addCommentToPost,
        getCommentsFromPostInList
    } = useContext(PostsContext);
    const { topicId, postId } = useParams();
    const [ post, setPost ] = useState(null)
    const [ comment, setComment ] = useState('');
    const [ currentPostComments, setCurrentPostComments ] = useState([]);
    const [ commentInputConent, setCommentInputConent ] = useState(null);

    useEffect(() =>{
        const posts = [...postsComments].reverse();
        const comments = getCommentsFromPostInList(posts, topicId, postId);

        setCurrentPostComments(comments);
    }, [postsComments, topicId, postId]);

    useEffect(() => {
        setPost(getPostByTopicIdAndPostId(topicId, postId));
    }, [topicId, postId]);

    useEffect(() => {
        setCommentInputConent(null);
    }, [commentInputConent])

    const handleKeyPressEnter = (e) => {
        if (e.key === 'Enter') {
            addCommentToPost({topicId, postId: post.id}, comment);
            setCommentInputConent('');
        }
    }

    return (
        <>
            { post && (
                <div className='post-wrapper'>
                    <div className='post-content'>
                        <div className='post-content-wrapper'>
                            <p className="post-content-info">Posted by u/{post.username} {post.since}</p>
                            <h3 className='post-content-description'>{post.description}</h3>
                        </div>
                        <img className="post-content-image" src={post.link} />
                        <div className='comments-wrapper'>
                            <h4 className='comments-label'>Comments</h4>
                            {currentPostComments && (
                                currentPostComments.map((comment, index) => (
                                    <Comment key={index} comment ={comment}/>
                                )
                            ))}
                            {isAuthenticated && (
                                <div className='comments-input-wrapper'>
                                    <input 
                                        name='comment-input'
                                        className='comment-input'
                                        placeholder='Leave a coment here...'
                                        onChange={(event) => setComment(event.target.value)}
                                        value={commentInputConent}
                                        onKeyDown={handleKeyPressEnter}
                                    />
                                    <button 
                                        disabled={(!comment)}
                                        className='comment-button'
                                        onClick={() => (addCommentToPost({topicId, postId: post.id}, comment),setCommentInputConent(''))}
                                    >
                                        <FontAwesomeIcon icon={faPaperPlane} /> Post
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}