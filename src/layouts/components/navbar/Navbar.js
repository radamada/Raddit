import { faRightFromBracket, faRightToBracket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContextProvider';
import './Navbar.css';
import radditLogo from '../../../assets/icons8-reddit.svg';
import Dropdown from '../dropdown/Dropdown';
import Search from '../search/Search';

export default function Navbar() {
    const navigate = useNavigate();

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    
    const handleAuth = () => {
        if (isAuthenticated) {
            setIsAuthenticated(false);
        } else {
            navigate('/login');
        }
    }

    return (
        <div className="navbar">
            <div className="left">
                <Link className='link' to="/">
                    <img className='logo' src={radditLogo} />
                    <h4 className='raddit-title'>Raddit</h4>
                </Link>
            </div>
            <Search />
            <div className="profile">
                {isAuthenticated && 
                    <Link className='profile-link' to="/profile">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </Link>
                }
                <button className="login" onClick={() => handleAuth()}>
                    { !isAuthenticated ? (
                        <>
                            <FontAwesomeIcon icon={faRightToBracket} /> Login
                        </>
                    ) : (
                        <><FontAwesomeIcon icon={faRightFromBracket} /> Logout </>
                    )}
                </button>
            </div>
            <Dropdown />
        </div>
    );
}