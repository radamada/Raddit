import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContextProvider";

export const PostsContext = createContext(null);

export default function PostsContextProvider({ children }) {
    const [ followedPosts, setFollowedPosts ] = useState([]);
    const [ likedPosts, setLikedPosts ] = useState([]);
    const [ dislikedPosts, setDislikedPosts ] = useState([]);
    const [ postsComments, setPostsComments ] = useState([]);

    const { isAuthenticated } = useContext(AuthContext);

    const addPostToFollowed = (post) => {
        if (!isAuthenticated) return;

        const postIndext = findPostIndexInList(followedPosts, post)

        if(postIndext === -1) {
            followedPosts.push(post);
        } else {
            followedPosts.splice(postIndext, 1);
        }

        setFollowedPosts([...followedPosts]);
    }

    const addPostToLiked = (post) => {
        if (!isAuthenticated) return;

        const postIndext = findPostIndexInList(likedPosts, post)

        if(postIndext === -1) {
            likedPosts.push(post);
            dislikedPosts.splice(postIndext, 1);
        } else {
            likedPosts.splice(postIndext, 1);
        }

        setLikedPosts([...likedPosts]);
    }

    const addPostToDisliked = (post) => {
        if (!isAuthenticated) return;

        const postIndext = findPostIndexInList(dislikedPosts, post)

        if(postIndext === -1) {
            dislikedPosts.push(post);
            likedPosts.splice(postIndext, 1);
        } else {
            dislikedPosts.splice(postIndext, 1);
        }

        setDislikedPosts([...dislikedPosts]);
    }

    const addCommentToPost = (post, comment) => {
        if (!isAuthenticated) return;

        const postInfo = {
            topicId: parseInt(post.topicId),
            postId: parseInt(post.postId),
            comments: [comment]
        }

        const postIndex = findPostIndexInList(postsComments, postInfo);
        
        if(postIndex === -1) {
            postsComments.push(postInfo);
        } else {
            postsComments[postIndex].comments.push(comment);
        }

        setPostsComments([...postsComments]);
    }
    

    const isPostFollowed = (post) => {
        const postIndex = findPostIndexInList(followedPosts, post)
        
        return postIndex === -1 ? false : true;
    }

    const isPostLiked = (post) => {
        const postIndex = findPostIndexInList(likedPosts, post)
        
        return postIndex === -1 ? false : true;
    }

    const isPostDisliked = (post) => {
        const postIndex = findPostIndexInList(dislikedPosts, post)
        
        return postIndex === -1 ? false : true;
    }

    const findPostIndexInList = (list, post) => {
        const postIndex = list.findIndex((listPost) => 
            listPost.postId === post.postId && listPost.topicId === post.topicId
        );

        return postIndex;
    }

    const getCommentsFromPostInList = (list, topicId, postId) => {
       const postComments = list.find(
           (listPost) =>
               listPost.topicId === parseInt(topicId) &&
               listPost.postId === parseInt(postId)
       );

       return postComments ? postComments.comments : []
   }

    return (
        <PostsContext.Provider 
            value={{
                followedPosts,
                likedPosts,
                dislikedPosts,
                postsComments,
                addPostToFollowed,
                addPostToLiked,
                addPostToDisliked,
                addCommentToPost,
                getCommentsFromPostInList,
                isPostFollowed,
                isPostLiked,
                isPostDisliked
            }}
        >
            {children}
        </PostsContext.Provider>
    );
}