import user from '../../../data/user';
import './Comment.css';
import userLogo from './../../../assets/user-profile-filled-svgrepo-com.svg';

export default function Comment( {comment} ) {

    return (
        <div className='comment-container'>
            <div className='comment-wrapper'>
                <div className='comment-user'>
                    <img className='commnet-user-img' src={userLogo} />
                    <p className='comment-user-name'>{user.name}</p>
                </div>
                <p className='comment-text'>{comment}</p>
            </div>
        </div>

    );
}