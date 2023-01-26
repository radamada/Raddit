import { useEffect, useState } from "react";
import { getAllPostOrderedByDate, getTopicIdForPost } from "../../data/posts";
import PostCard from "../components/PostCard/PostCard";
import './Home.css';

export default function Home() {
    const [ topicPosts, setTopicPosts ] = useState([]);

    useEffect(() => {
        setTopicPosts(getAllPostOrderedByDate());
    }, []);

    return (
        <div className="home-container">
            <div className='home-data'>
                <h2 className='home-data-title'>Popular</h2>
            </div>
            <div className="home-posts">
                {topicPosts.map((post, index) => {
                    return <PostCard key={index} topicId={getTopicIdForPost(post)} post={post} />;
                })}
            </div>
        </div>
    );
}