import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    console.log(user, 'user here');
    
    const recentItem = (topic) => {
        // return(
            <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>
                {topic}
            </p>
        </div>
        // )
        
    }
    return (
        <div className='sidebar'>
            <div className="sidebar___top">
                <img src="https://images.unsplash.com/photo-1522836924445-4478bdeb860c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29yayUyMHRhYmxlfGVufDB8fDB8fHww" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,500</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,500</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("developer")}

            </div>
        </div>
    )
}

export default Sidebar
