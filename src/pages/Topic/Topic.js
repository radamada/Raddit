import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsFromTopic } from "../../data/posts";
import { getTopicById } from "../../data/topics";
import PostCard from "../components/PostCard/PostCard";
 
import './Topic.css';

export default function Topic() {
    const [ topicPosts, setTopicPosts ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setTopicPosts(getPostsFromTopic(id));
    }, [id]);

    return (
        <div className="topic-container">
            <div className='topic-data'>
                <h2 className='topic-data-title'>{getTopicById(id).name}</h2>
            </div>
            <div className="topic-posts">
                {topicPosts.map((post, index) => {
                    return <PostCard key={index} topicId={id} post={post} />;
                })}
            </div>
        </div>
    );
}