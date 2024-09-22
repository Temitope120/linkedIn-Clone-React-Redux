import React from 'react';
import './Header.css';

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './userSlice';
import { auth } from './firebase';
// import ArrowDownward from '@mui/icons-material/ArrowDownward';


function Header() {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout())
        auth.signOut();

    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt="logo" />

                <div className="header__search">
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                {/* dropdown={ArrowDownward}  */}
                <HeaderOption title='Me' avatar={true}  onClick={logOut}/>
            </div>
        </div>
    )
}

export default Header
