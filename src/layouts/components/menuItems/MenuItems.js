import './MenuItems.css';
import { Link } from 'react-router-dom';
import topicsData from '../../../data/topics';
import { faFire, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuItems() {
     
    return (
        <div className='menu-items'>
            <div className='feeds'>
            <h3 className='feeds-label'>FEEDS</h3>
                <ul className="feeds-list">
                    <li className='feed'>
                        <Link className='link' to={`/`}> 
                            <div className='icon-wrapper'>
                                <FontAwesomeIcon icon={faFire} />
                            </div>
                            <div className='link-name'>
                                Popular
                            </div>
                        </Link>
                    </li>
                    <li className='feed'>
                        <Link className='link' to={`/followed`}> 
                            <div className='icon-wrapper'>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div className='link-name'>
                                Followed
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topics">
                <h3 className='topics-label'>TOPICS</h3>
                <ul className="topics-list">
                    {topicsData.map((topic, index) => {
                        return (
                            <li key={index} className="topic">
                                <Link className='link' to={`/topic/${topic.id}`}>
                                    <div className='icon-wrapper'>
                                        <FontAwesomeIcon icon={topic.icon} />
                                    </div>
                                    <div className='link-name'>
                                        {topic.name}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}