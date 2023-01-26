import './AuthLayout.css';

import { Link, Outlet } from "react-router-dom";
import radditLogo from "../../assets/icons8-reddit.svg";

export default function AuthLayout() {
    return (
        <div className='wrapper'>
            <Link className='logo-wrapper' to={`/`}>
                <img className='logo-img' src={radditLogo} />
                <h1 className='logo-title'>Raddit</h1>
            </Link>
            <Outlet />
        </div>
    );
} 