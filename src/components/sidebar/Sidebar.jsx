import React from 'react';
import "./sidebar.css"
import SidebarButton from './SidebarButton';
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { BiLibrary } from "react-icons/bi";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU" className="profile-img" alt="profile" />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
                <SidebarButton title="Library" to="/" icon={<BiLibrary />} />
            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
        </div>
    )
}

export default Sidebar
