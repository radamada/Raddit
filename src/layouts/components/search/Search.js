import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopicIdByName } from '../../../data/topics';
import './Search.css';

export default function Search() {
    const navigate = useNavigate();
    const [ searchedItem, setSearchedItem ] = useState('');
    const [ inputConent, setInputContent ] = useState(null);

    useEffect(() => {
        setInputContent(null);
    }, [inputConent])

    const handleKeyPressEnter = (e) => {
        if (e.key === 'Enter') {
            if (getTopicIdByName(searchedItem)) {
                setInputContent('');
                navigate(`/topic/${getTopicIdByName(searchedItem)}`);
            }
        }
    }

    return (
        <div className='search-container'>
            <input 
                className='search-input'
                placeholder='Search for your topic here...'
                onChange={(event) => setSearchedItem(event.target.value)}
                value={inputConent && inputConent}
                onKeyDown={handleKeyPressEnter}
            />
            <button
                className='search-button'
                onClick={() => getTopicIdByName(searchedItem) ? (
                    setInputContent(''),
                    navigate(`/topic/${getTopicIdByName(searchedItem)}`)
                ):(<></>
                )} 
            >
                <FontAwesomeIcon className='button-icon' icon={faSearch} />
            </button>
        </div>
    );
}