import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import './FeedLayout.css';

export default function FeedLayout() {
    return <div className="feed-wrapper">
        <Navbar />
        <div className="feed-layout">
            <Sidebar />
            <Outlet />
        </div>
    </div>
}