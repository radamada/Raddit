import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from '../menuItems/MenuItems';
import './Dropdown.css';

export default function Dropdown() {
    

    return (
        <div className='dropdown-container'>
            <div className='dropdown-wrapper'>
                <p className='dropdown-label'>Navigation Menu</p>
                <FontAwesomeIcon className='dropdown-icon' icon={faBars} color={"orange"} />
            </div>
            <div className='dropdown-content'>
                <MenuItems />
            </div>
        </div>
    );
}