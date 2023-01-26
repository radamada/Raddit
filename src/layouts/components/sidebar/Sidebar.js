import './Sidebar.css';
import Footer from '../footer/Footer';
import MenuItems from '../menuItems/MenuItems';

export default function Sidebar() {

    return (
        <div className='sidebar'>
            <MenuItems />
            <Footer />
        </div>
    );
}
